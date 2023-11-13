import SectionCover from "../Shared/SectionCover";
import shopImage from '../../../public/assets/shop/banner2.jpg'
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div>
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
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;