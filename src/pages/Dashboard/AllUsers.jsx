import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    // make admin
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then((res)=> {
            if(res.data?.modifiedCount > 0){
                refetch()
                toast.success(`${user?.name} Are Admin Now!`)
            }
        })
    }

    // user delete with confirmatin
    const handleDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
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
        <div className=" max-w-5xl mx-auto">
            <div className="flex justify-evenly my-5">
                <h3 className="text-4xl font-semibold">All Users</h3>
                <h3 className="text-4xl font-semibold">Total Users: {users.length}</h3>
            </div>
            <div className="overflow-x-auto shadow-lg">
                <table className="table">
                    <thead className="text-xl font-semibold">
                        <tr>
                            <th>sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="text-white bg-orange-400 px-2 py-1 text-3xl"><FaUsers /></button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="text-error border btn text-3xl"><MdDeleteForever /></button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;