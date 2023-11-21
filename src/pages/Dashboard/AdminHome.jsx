import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaJediOrder, FaUsers } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    // console.log(stats);
    return (
        <>
            <div className="max-w-5xl mx-auto mt-12">
                <span className="text-2xl font-semibold uppercase">hi, welcome </span>
                {
                    user?.displayName ? <span className="text-3xl font-bold uppercase">{user.displayName}</span> : <span className="text-2xl font-semibold uppercase">back</span>
                }
            </div>
            <div className="max-w-4xl mx-auto mt-12">
                <div className="stats shadow-md gap-4">

                    <div className="stat bg-gradient-to-r from-fuchsia-600 text-white">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className="text-3xl"></FaDollarSign>
                        </div>
                        <div className="stat-title text-xl text-white">Revenue</div>
                        <div className="stat-value">{stats.revenue}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-orange-300 text-white">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-3xl"></FaUsers>
                        </div>
                        <div className="stat-title text-xl text-white">Users</div>
                        <div className="stat-value">{stats.users}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-pink-600 text-white">
                        <div className="stat-figure text-secondary">
                            <FaBook className="text-3xl"></FaBook>
                        </div>
                        <div className="stat-title text-xl text-white">Menu Items</div>
                        <div className="stat-value">{stats.menuItem}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-teal-400 text-white">
                        <div className="stat-figure text-secondary">
                            <FaJediOrder className="text-3xl"></FaJediOrder>
                        </div>
                        <div className="stat-title text-xl text-white">Orders</div>
                        <div className="stat-value">{stats.ordars}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AdminHome;