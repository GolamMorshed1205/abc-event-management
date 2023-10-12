import about from "../../assets/images/birthday-banner.jpg";
import logo from "../../assets/images/abc-event.png";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>
            <h1 className="w-full h-[40vh] flex justify-center items-center text-6xl font-bold bg-black text-white mb-8">About Us</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">ABC EVENT Ltd</h1>
                        <p className="py-6">ABC Event is your go-to platform for all your events organizer needs in Bangladesh . We are a trusted event organizer company that offers a wide range of services to help you manage and decorate events for wedding, parties, and more.

                            Our mission is to give gorgeous looks the events process for both event organizers and attendees. We offer a user-friendly platform that enables event all kind of elements to easily manage.

                            At ABC, we believe in providing exceptional customer service to ensure a hassle-free experience for our clients. Our dedicated team is always available to assist you with any questions or concerns you may have, and we work tirelessly to ensure that your event runs smoothly.

                            We take pride in being a homegrown Bangladeshi company that understands the unique needs and challenges of the local market. We are committed to supporting our local communities and promoting the arts and culture scene in Bangladesh.</p>
                        <Link to={"/services"}><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;