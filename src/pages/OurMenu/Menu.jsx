import { Helmet } from "react-helmet-async";
import SectionCover from "../Shared/SectionCover";
import bgImage from '../../../public/assets/menu/banner3.jpg'
import SectionTitle from "../Shared/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import PopularItems from "../Shared/PopularItems";


const Menu = () => {

    const [menu] = useMenu()
    const offeredtItems = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro boss | Menu</title>
            </Helmet>
            <SectionCover
                bgImage={bgImage}
                title={"Our menu"}
            ></SectionCover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"today's offer"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 my-12 gap-8">
                {
                    offeredtItems.map(item => <PopularItems key={item._id} item={item}></PopularItems>)
                }
            </div>

        </div>
    );
};

export default Menu;