import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../Shared/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCarts from "../../Hooks/useCarts";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_KEY)

const Payment = () => {
    const [cart] = useCarts();
    return (
        <>
            <div>
                <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"}></SectionTitle>
                <h1 className="text-3xl font-semibold text-center my-12">Your Total Item:{cart.length}</h1>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </>
    );
};

export default Payment;