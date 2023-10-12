import { useLoaderData } from "react-router-dom";
import Events from "../../components/Events/Events";

const Services = () => {
    const events = useLoaderData();
    return (
        <div>
            <h1 className="w-full h-[40vh] flex justify-center items-center text-6xl font-bold bg-black text-white mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 mx-8">
                {
                    events.map(event => <Events key={event.id} event={event}></Events>)
                }
            </div>
        </div>
    );
};

export default Services;