import SectionTitle from "../Shared/SectionTitle";
// import featuredImg from '../../../public/assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="pt-12" style={{backgroundImage: 'url(../../../public/assets/home/featured.jpg)'}}>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"from our menu"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-8 px-40 py-20">
                <img className="w-[460px] h-[300px]" src="../../../public/assets/home/featured.jpg" alt="" />
                <div className="text-white">
                    <h4 className="text-lg">March 20, 2023</h4>
                    <p className="uppercase text-lg">whre can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore iste explicabo eveniet, quis magnam nemo eligendi minus a rem reprehenderit totam maxime laboriosam perspiciatis. Aliquid, nihil. Ipsa error ipsum itaque.</p>
                    <button className="btn btn-outline text-white mt-2">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;