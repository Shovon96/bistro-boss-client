import SectionTitle from "../Shared/SectionTitle";
import PopularItems from "../Shared/PopularItems";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu()
    const popularItems = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"from our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 my-12 gap-8">
                {
                    popularItems.map(item => <PopularItems key={item._id} item={item}></PopularItems>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;