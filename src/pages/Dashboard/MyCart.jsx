import Swal from "sweetalert2";
import useCarts from "../../Hooks/useCarts";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyCart = () => {

    const [cart, refetch] = useCarts()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure()

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <>
            <div className="flex justify-evenly mt-16">
                <h1 className="text-5xl font-semibold">Items: {cart.length}</h1>
                <h1 className="text-5xl font-semibold">Total Price: {totalPrice}</h1>
                <button className="btn btn-info text-white font-bold">Please Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table max-w-5xl mx-auto shadow-md mt-4">
                    {/* head */}
                    <thead className="text-xl">
                        <tr>
                            <th>Sl</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="text-error text-3xl"><MdDeleteForever /></button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div >
        </>
    );
};

export default MyCart;