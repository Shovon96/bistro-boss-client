import { Helmet } from "react-helmet-async";
import SectionCover from "../Shared/SectionCover";
import SectionTitle from "../Shared/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import PopularItems from "../Shared/PopularItems";
import menuImage from '../../../public/assets/menu/banner3.jpg'
import dessertImage from '../../../public/assets/menu/dessert-bg.jpeg'
import pizzatImage from '../../../public/assets/menu/pizza-bg.jpg'
import souptImage from '../../../public/assets/menu/soup-bg.jpg'
import saladImage from '../../../public/assets/menu/salad-bg.jpg'


const Menu = () => {

    const [menu] = useMenu()
    const offeredtItems = menu.filter(item => item.category === 'offered')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')


    return (
        <div>
            <Helmet>
                <title>Bistro boss | Menu</title>
            </Helmet>

            {/* menu offer section */}
            <SectionCover
                bgImage={menuImage}
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

            {/* menu dessert sections */}
            <SectionCover
                bgImage={dessertImage}
                title={"dessert"}
            ></SectionCover>

            <div className="grid md:grid-cols-2 my-12 gap-8">
                {
                    dessertItems.map(item => <PopularItems key={item._id} item={item}></PopularItems>)
                }
            </div>
            {/* menu pizza sections */}
            <SectionCover
                bgImage={pizzatImage}
                title={"pizza"}
            ></SectionCover>

            <div className="grid md:grid-cols-2 my-12 gap-8">
                {
                    pizzaItems.map(item => <PopularItems key={item._id} item={item}></PopularItems>)
                }
            </div>

            {/* menu salad sections */}
            <SectionCover
                bgImage={saladImage}
                title={"salad"}
            ></SectionCover>

            <div className="grid md:grid-cols-2 my-12 gap-8">
                {
                    saladItems.map(item => <PopularItems key={item._id} item={item}></PopularItems>)
                }
            </div>
            
            {/* menu soup sections */}
            <SectionCover
                bgImage={souptImage}
                title={"soup"}
            ></SectionCover>

            <div className="grid md:grid-cols-2 my-12 gap-8">
                {
                    soupItems.map(item => <PopularItems key={item._id} item={item}></PopularItems>)
                }
            </div>

        </div>
    );
};

export default Menu;