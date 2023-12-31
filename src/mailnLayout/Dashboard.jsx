import { FaAd, FaBook, FaCalendar, FaCartPlus, FaEnvelope, FaHome, FaList, FaListAlt, FaRedRiver, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    // Admin existing
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side content */}
            <div className="w-60 min-h-screen bg-orange-400">
                <ul className="menu p-4">

                    {/* Admin dashboard */}
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'><FaList></FaList> Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageBookings'><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUser></FaUser> All Users</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaRedRiver></FaRedRiver> Pyment History</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaCartPlus></FaCartPlus> My Cart</NavLink></li>
                                <li><NavLink to='/dashboard/addReview'><FaAd></FaAd> Add Review</NavLink></li>
                                <li><NavLink to='/dashboard/myBooking'><FaList></FaList> My Booking</NavLink></li>

                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaRedRiver></FaRedRiver> Pyment History</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaCartPlus></FaCartPlus> My Cart</NavLink></li>
                                <li><NavLink to='/dashboard/addReview'><FaAd></FaAd> Add Review</NavLink></li>
                                <li><NavLink to='/dashboard/myBooking'><FaList></FaList> My Booking</NavLink></li>

                            </>
                    }

                    <div className="divider"></div>
                    {/* main layout navlink */}
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/ourMenu'><FaListAlt></FaListAlt> Our Menu</NavLink></li>
                    <li><NavLink to='/contact'><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>
            </div>
            {/* dashboard contant */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;