import Banner from "./Banner";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import SwiperSlideCategory from "./SwiperSlide";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SwiperSlideCategory></SwiperSlideCategory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;