import { useEffect, useState } from "react";
import EventList from "../../components/Order/EventList";

const Order = () => {

    const [event, setEvent] = useState([]);
    const [noData, setNoData] = useState(false);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const eventItem = JSON.parse(localStorage.getItem('event'))

        if (eventItem) {
            setEvent(eventItem)
        }
        else {
            setNoData('Nothing Is Here')
        }
    }, []);

    return (
        <div>
            {
                noData ? <p className="h-[70vh] text-2xl font-bold flex justify-center items-center">{noData}!!</p> :
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                            {
                                showAll ? event.map(eventList => <EventList key={eventList.id} event={eventList}></EventList>)

                                    : event.slice(0, 4).map(eventList => <EventList key={eventList.id} event={eventList}></EventList>)

                            }
                        </div>
                        <div className="flex justify-center items-center">
                            <button 
                            onClick={() => setShowAll(!showAll)} 
                            className="btn btn-secondary">
                                {!showAll? 'Show All' : 'Show Less'}
                            </button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Order;