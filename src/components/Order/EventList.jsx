import { Link } from "react-router-dom";

const EventList = ({event}) => {
    const { id, title, service_charge, image } = event ;

    return (
        <div>
            <div className="relative flex flex-row rounded-xl bg-red-100 bg-clip-border shadow-md my-4">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border ">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    {/* <h6 className="mb-4 block font-bold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {$} 
                    </h6> */}
                    <h4 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-800 antialiased">
                    {title}
                    </h4>
                    <p className="mb-2 block text-2xl font-bold leading-relaxed text-gray-700 antialiased">
                    {service_charge}
                    </p>
                    <button className="btn btn-secondary">Call Us for Details</button>
                </div>
            </div>
        </div>
    );
};

export default EventList;