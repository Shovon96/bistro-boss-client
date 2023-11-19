import { MdDeleteForever } from "react-icons/md";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = item => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be delete ${item?.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${item?.name} has been Delete!`,
                        showConfirmButton: false,
                        timer: 1000
                      });
                }

            }
        });
    }

    return (
        <>
            <div>
                <SectionTitle heading={"Manage all items"} subHeading={"Hurry Up"}></SectionTitle>
            </div>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-semibold mt-12 text-start">Total Items: {menu.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table max-w-5xl mx-auto shadow-md mt-4">
                        {/* head */}
                        <thead className="text-xl bg-orange-500 text-white ">
                            <tr>
                                <th>Sl</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-lg">
                            {
                                menu.map((item, index) =>
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
                                        <td>$ {item?.price}</td>
                                        <td>
                                            <button className="text-white text-2xl bg-orange-500 p-2"><FaEdit /></button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteItem(item)} className="text-error text-3xl"><MdDeleteForever /></button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div >
            </div>
        </>
    );
};

export default ManageItems;