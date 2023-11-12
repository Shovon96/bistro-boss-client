import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import PopularItems from "../Shared/PopularItems";

const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, [])

    return (
        <div>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"from our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 my-12 gap-8">
                {
                    menu.map(item => <PopularItems key={item._id} item={item}></PopularItems>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;