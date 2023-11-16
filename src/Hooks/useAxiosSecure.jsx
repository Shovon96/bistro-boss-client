import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {

    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate()

    // request interseptor to add authorization header for
    // every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error){
        return Promise.reject(error)
    })

    // interseptor 401 and 403 status error handle
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the interseptor', status);
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;