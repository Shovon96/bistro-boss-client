import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const image_hosting_key = import.meta.env.VITE_IMAGEBB_HOSTING_API
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdatedItem = () => {
    const { register, handleSubmit } = useForm();
    const {name, price, category, recipe, _id} = useLoaderData()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imagebb and then get an url
        const imgFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuPost = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuPost.data);
            if(menuPost.data.modifiedCount > 0){
                toast.success(`${menuItem?.name} has been updated`);
            }
        }
        console.log(res.data);
    }
    return (
        <>
            <div>
                <SectionTitle heading={"Update now"} subHeading={"Update Item"}></SectionTitle>
            </div>
            <div className="bg-slate-100 rounded-md shadow-md my-16 mx-36 px-8 py-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input defaultValue={name} {...register("name")} type="text" placeholder="Type Recipe Name..." className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-8 mt-2">
                        {/* select cetegory */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Select a Recipe</span>
                            </label>
                            <select defaultValue={category} className="select select-bordered w-full" {...register("category")}>
                                <option disabled value='default'>Select a cetegory</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price:</span>
                            </label>
                            <input defaultValue={price} {...register("price")} type="text" placeholder="Type Price..." className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* Recipe Details */}
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea defaultValue={recipe}  {...register("recipe")} placeholder="Recipe Details..." className="textarea textarea-bordered textarea-md w-full" ></textarea>
                    </div>
                    <div className="mt-4">
                        <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <button className="btn bg-amber-600 mt-5 text-white hover:bg-amber-700">update item </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdatedItem;