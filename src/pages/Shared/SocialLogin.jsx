import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(() => {
                        toast.success("Login Successfully");
                        navigate(from, { replace: true })
                    })
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