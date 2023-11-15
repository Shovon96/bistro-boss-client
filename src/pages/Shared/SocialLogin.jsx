import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => {
                toast.success(res.user.displayName, "Login");
                navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <div className="flex justify-evenly">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-sm text-lg"><FaGoogle className="text-red-500"></FaGoogle> google</button>
                <button className="btn btn-outline btn-sm text-lg"><FaGithub></FaGithub> github</button>
            </div>
        </div>
    );
};

export default SocialLogin;