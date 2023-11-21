import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Shared/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })

    return (
        <>
            <div>
                <SectionTitle heading={"Payment history"} subHeading={"Your Payment History"}></SectionTitle>
            </div>
            <div>
                <h1 className="text-4xl text-center my-9 font-semibold">Total Payments: {payments.length}</h1>
                <div className="overflow-x-auto max-w-4xl mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-lg">
                            <tr>
                                <th>Sl</th>
                                <th>Price</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) =>
                                <tr key={payment._id}>
                                    <th>{index +1}</th>
                                    <td>{payment?.price}</td>
                                    <td>{payment?.transactionId}</td>
                                    <td>{payment?.status}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PaymentHistory;