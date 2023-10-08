import image1 from "../../assets/images/Radiant Bed.jpg";
import image2 from "../../assets/images/Starlit Bed.jpg";
import image3 from "../../assets/images/Sunmoon Bed.jpg";
import image4 from "../../assets/images/Taj Bed.jpg";


const Banner = () => {
    return (
        <div className="carousel rounded-box h-[60vh]">
            <div className="carousel-item">
                <img src={image1} />
            </div>
            <div className="carousel-item">
                <img src={image2} />
            </div>
            <div className="carousel-item">
                <img src={image3} />
            </div>
            <div className="carousel-item">
                <img src={image4} />
            </div>
            
        </div>
    );
};

export default Banner;