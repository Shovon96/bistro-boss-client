import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import '../../App.css'
// import required modules
import { Pagination } from 'swiper/modules';

// import image from local
import img1 from '../../../public/assets//home//slide1.jpg'
import img2 from '../../../public/assets//home//slide2.jpg'
import img3 from '../../../public/assets//home//slide3.jpg'
import img4 from '../../../public/assets//home//slide4.jpg'
import img5 from '../../../public/assets//home//slide5.jpg'

const SwiperSlideCategory = () => {
    return (
        <>
            <div className='body'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-24"
                >
                    <SwiperSlide>
                        <img className='relative' src={img1} alt="" />
                        <h3 className='text-3xl absolute uppercase -mb-96 text-center'>salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={img2} alt="" />
                        <h3 className='text-3xl absolute uppercase -mb-96 text-center'>pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={img3} alt="" />
                        <h3 className='text-3xl absolute uppercase -mb-96 text-center'>soupes</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={img4} alt="" />
                        <h3 className='text-3xl absolute uppercase -mb-96 text-center'>desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={img5} alt="" />
                        <h3 className='text-3xl absolute uppercase -mb-96 text-center'>salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={img3} alt="" />
                        <h3 className='text-3xl absolute uppercase -mb-96 text-center'>soupes</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={img4} alt="" />
                        <h3 className='text-3xl absolute uppercase -mb-96 text-center'>desserts</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default SwiperSlideCategory;