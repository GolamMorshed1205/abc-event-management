import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Events from "../../components/Events/Events";

const Home = () => {

    const events = useLoaderData();
    console.log(events)

    return (
        <div>
            <Banner className=""></Banner>
            
            <h2 className="text-5xl font-poppins text-center font-bold ">Featured Services </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {
                    events.map(event => <Events key={event.id} events={event}></Events>)
                }
            </div>

        </div>
    );
};

export default Home;