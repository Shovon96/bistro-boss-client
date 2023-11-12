
const PopularItems = ({item}) => {
    const {name, recipe, image, price} = item
    return (
        <div className="flex items-center">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[90px]" src={image} alt="" />
            <div className="ml-4 text-gray-400">
                <h4 className="text-xl">{name}--------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-500 font-semibold text-lg">${price}</p>
        </div>
    );
};

export default PopularItems;