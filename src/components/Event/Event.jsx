import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2' ;




const Event = () => {
    const [event , setEvent] = useState({}) ;

    const {id} = useParams () ;

    const events = useLoaderData() ;

    useEffect(()=>{
        const findEvent = events?.find(event=>event.id == id)
        setEvent(findEvent)
    } ,[id,events])

    const handleAddToEvent = () => {
        // console.log ('clicked')
        
        const addEventArray = [] ;

        const eventItem = JSON.parse(localStorage.getItem ('event'))

        if(!eventItem){
            addEventArray.push(event)
            localStorage.setItem ('event' , JSON.stringify(addEventArray))
            alert ('success')
        }
        else{
            const isExist = eventItem.find (newEvent => newEvent.id == id )

            if (!isExist){
                addEventArray.push(...eventItem , event) ;
            localStorage.setItem ('event' , JSON.stringify(addEventArray))
            Swal.fire('Event taken Successfully!')
            }
            else {
               return Swal.fire('Already taken this event!')

            }           
        }
    }

    return (
        <div className="my-2">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src={event.image} alt="" className="w-3/4 h-[60vh] mx-auto" />
                    </figure>
                    <div className="card-body w-9/12 mx-auto">
                        <div className="flex justify-between py-4">
                            <h2 className="card-title text-blue-600 font-bold">{event.title}</h2>
                            <div className="card-actions">
                                <button onClick={handleAddToEvent}
                                 className="btn btn-primary"
                                 >Service Charge {event.service_charge}
                                </button>
                            </div>
                        </div>
                        <p className="py-4 font-semibold">{event.details}</p>
                    </div>
                </div>
        </div>
    );
};

export default Event;