import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCarts from "../../Hooks/useCarts";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts()

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                if(res.data.insertedId){
                    toast.success(`${name} add your cart`)
                }
                refetch()
            })

        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-[420px]" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="absolute right-0 top-2 bg-black text-white font-semibold px-2 mr-2">${price}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn btn-outline">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;