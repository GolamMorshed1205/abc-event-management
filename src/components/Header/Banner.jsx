import image1 from "../../assets/images/wedding-banner.jpeg";
import image2 from "../../assets/images/birthday-banner.jpg";



const Banner = () => {
    return (
        <div className="carousel w-full mb-10 h-[70vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

        // <div className="carousel rounded-box h-[60vh]">
        //     <div className="carousel-item">
        //         <img src={image1} />
        //     </div>
        //     <div className="carousel-item">
        //         <img src={image1} />
        //     </div>
        //     <div className="carousel-item">
        //         <img src={image1} />
        //     </div>
        //     <div className="carousel-item">
        //         <img src={image1} />
        //     </div>           
        // </div>
    );
};

export default Banner;