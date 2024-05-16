import "./calendar_item.css"
import React, {useState, useRef, useEffect} from "react";
import EventPopup from "../event_popup/event_popup";


const CalItem = (props) => {
    const { event } = props;
    const [showPopup, setShowPopup] = useState(false);
    const eventBoxRef = useRef(null);

    useEffect(() => {
        // Access the height of the event-box div after it's rendered
        const eventBoxHeight = eventBoxRef.current.clientHeight;
        // You can do something with the height here, like store it in state or pass it to a parent component
        console.log("Event box height:", eventBoxHeight);
    }, [showPopup]); // Trigger effect when showPopup changes

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div ref={eventBoxRef} className="event-box" onClick={togglePopup}>
            <p className="event-box-title">{event.title}</p>
            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <EventPopup event={event}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalItem;