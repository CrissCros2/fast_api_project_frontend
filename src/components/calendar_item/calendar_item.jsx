import "./calendar_item.css"
import React, {useState} from "react";
import EventPopup from "../event_popup/event_popup";

const CalItem = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="event-box" onClick={togglePopup}>
            <p className="event-box-title">{props.event.title}</p>
            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <EventPopup event={props.event}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalItem;