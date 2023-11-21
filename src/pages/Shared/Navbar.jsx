import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import useCarts from "../../Hooks/useCarts";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCarts();
    const [isAdmin] = useAdmin()

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successfully!')
            })
            .catch(err => {
                toast.error(err)
            })
    }

    const navLink = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/contactUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
        >
            Contact Us
        </NavLink>
        {
            isAdmin ?
            <NavLink
            to="/dashboard/adminHome"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
        >
            Dashboard
        </NavLink>
        :
        <NavLink
            to="/dashboard/userHome"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
        >
            Dashboard
        </NavLink>
        }
        <NavLink
            to="/ourMenu"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
        >
            Our Menu
        </NavLink>
        <NavLink
            to="/ourShop"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
        >
            Our Shop
        </NavLink>
        <NavLink to='/dashboard/cart' className='flex items-center gap-1 ml-8'>
            <FaCartPlus className="text-lg"/>
            <div className="badge badge-secondary">+{cart.length}</div>
        </NavLink>
    </>

    return (
        <div className="navbar fixed opacity-60 z-10 bg-slate-950 max-w-7xl mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <p>{user?.displayName}</p> : ''
                }
                {
                    user ?
                        <button onClick={handleLogout} className="btn btn-sm">LogOut</button> :
                        <NavLink to='/login'>
                            <button className="btn btn-warning text-white">Login</button>
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;