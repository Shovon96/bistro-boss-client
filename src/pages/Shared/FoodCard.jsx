
const FoodCard = ({item}) => {
    const {name, image, price, recipe } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="absolute right-0 top-0 bg-black text-white font-semibold px-2 mr-2">${price}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;