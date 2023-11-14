import SectionCover from "../Shared/SectionCover";
import shopImage from '../../../public/assets/shop/banner2.jpg'
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../Shared/FoodCard";
import { Helmet } from "react-helmet-async";


const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
    const drinksItems = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <SectionCover bgImage={shopImage} title={"Our shop"}></SectionCover>
            {/* react tabs panel */}
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center my-6 font-semibold">
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    {/* salad item */}
                    <TabPanel>
                        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                saladItems.map(item =>
                                    <FoodCard
                                        key={item._id}
                                        item={item}
                                    > </FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    {/* pizza item */}
                    <TabPanel>
                        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                pizzaItems.map(item =>
                                    <FoodCard
                                        key={item._id}
                                        item={item}
                                    > </FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    {/* soup item */}
                    <TabPanel>
                        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                soupItems.map(item =>
                                    <FoodCard
                                        key={item._id}
                                        item={item}
                                    > </FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    {/* dessert item */}
                    <TabPanel>
                        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                dessertItems.map(item =>
                                    <FoodCard
                                        key={item._id}
                                        item={item}
                                    > </FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    {/* drinks item */}
                    <TabPanel>
                        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                drinksItems.map(item =>
                                    <FoodCard
                                        key={item._id}
                                        item={item}
                                    > </FoodCard>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;