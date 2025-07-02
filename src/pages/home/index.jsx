import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import imgP1 from "../../assets/images/beef.webp";
import imgP2 from "../../assets/images/chicken.jpg";
import imgP3 from "../../assets/images/pork.webp";
import imgP4 from "../../assets/images/vegetable.webp";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const sliderItems = [
    {
        bgImg: imgP1,
        name: "Beef"
    },
    {
        bgImg: imgP2,
        name: "Chicken"
    },
    {
        bgImg: imgP3,
        name: "Pork"
    },
    {
        bgImg: imgP4,
        name: "Vegetable"
    }
]

const HomePage = () => {
    return (
        <div className="container ctr__categories_slider">
            <Carousel className="categories_slider"
                responsive={responsive}>
                {sliderItems?.map((item, key) => (
                    <div key={key} className="categories_slider_item"
                        style={{ backgroundImage: `url(${item.bgImg})` }}>
                        <p>{item.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default memo(HomePage);