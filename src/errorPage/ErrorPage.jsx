import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-5xl font-extrabold text-center">
                <h1>404</h1>
                <h1>Page not found</h1>
                <NavLink to='/'>
                    <button className="btn btn-secondary">Go home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;