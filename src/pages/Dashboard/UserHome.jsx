import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserHome = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div>
                <span className="text-2xl font-semibold uppercase">hi, welcome</span>
                {
                    user?.displayName ? <span className="text-3xl font-bold uppercase">{user.displayName}</span> : <span className="text-2xl font-semibold uppercase">back</span>
                }
            </div>
        </>
    );
};

export default UserHome;