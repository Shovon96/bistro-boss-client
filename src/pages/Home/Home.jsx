import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import SwiperSlideCategory from "./SwiperSlide";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <SwiperSlideCategory></SwiperSlideCategory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;