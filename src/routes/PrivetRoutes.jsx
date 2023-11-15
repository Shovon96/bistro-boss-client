import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <div className="flex justify-center items-center min-h-[72vh]"><progress className="progress w-56 text-orange-500"></progress></div>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;