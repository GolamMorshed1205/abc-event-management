import { Link } from "react-router-dom";

const Events = ({ event }) => {

    const { id, image, title, details } = event;


    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="w-full h-[30vh]"><img className="w-full" src={image} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title flex justify-center bg-pink-200">
                        {title}
                    </h2>
                    {details.length > 100 ? <p className="text-center">{details.slice(0, 55)}  </p> : <p>{details}</p>}

                    <div>
                        <Link to={`/event/${id}`}>
                            <button className="btn  btn-secondary w-full my-4">See Details</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Events;