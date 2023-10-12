import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Events from "../../components/Events/Events";

const Home = () => {

    const events = useLoaderData();

    return (
        <div>
            <Banner className=""></Banner>

            <h2 className="text-5xl font-poppins text-center font-bold"> Featured Services </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {
                    events.map(event => <Events key={event.id} event={event}></Events>)
                }
            </div>

            <h2 className="text-5xl font-poppins text-center font-bold my-4"> Featured Categories </h2>

            <NavLink to={"/services"}>
            <div className="grid grid-cols-3 md:grid-cols-6 my-8">
                {
                    events.map(event => <div key={event.id}>
                        <button className="btn my-2">{event.title}</button>
                    </div>)
                }
            </div>
            </NavLink>
        </div>
    );
};

export default Home;