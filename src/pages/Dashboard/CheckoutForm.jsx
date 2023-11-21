import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useCarts from "../../Hooks/useCarts";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)
    const [cart, refetch] = useCarts()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            // console.log('Payment error', error);
            setError(error.message)
        } else {
            console.log('Payment method', paymentMethod);
            setError('')
        }

        // confirm payment
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.name || 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log("error confirmed");
            setError(confirmError.message)
        }else{
            console.log('payment intent success', paymentIntent);
            if(paymentIntent.status === "succeeded"){
                setTransactionId(paymentIntent.id)
                toast.success('Payment success')

                // now save the payment history in the database
                const paymentHistory={
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // ToDo: date convert in utc date. use moment js
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', paymentHistory)
                console.log('payment history saved',res.data);
                refetch()
            }
        }

    }


    return (
        <form className="max-w-4xl mx-auto mt-14 shadow-md p-4" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className="text-red-600 text-sm">{error}</p>
            {transactionId && <p className="text-green-700 text-sm">Your Transaction Id: {transactionId}</p>}
            <button
                disabled={!stripe || !clientSecret}
                className="btn bg-orange-500 btn-sm mt-4" type="submit"
            >
                Please Pay
            </button>
        </form>
    );
};

export default CheckoutForm;