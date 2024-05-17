import styled from "styled-components";
import EventPopup from "../event_popup/event_popup";
import React, {useState} from "react";
import "./event.css";

const EventBox = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const Event = styled.div`
        background-color: #0078d4;
        color: white;
        border-radius: 3px;
        position: absolute;
        width: calc(100% - 10px);
        left: 3px;
        padding-left: 5px;
        top: ${({ top }) => top}px;
        height: ${({ height }) => height}px;
    `;

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <Event top={props.top} height={props.height} onClick={togglePopup}>
                <div className="event-box">{props.event.title}</div>
                {showPopup && (
                    <div className="popup-container">
                        <div className="popup">
                            <EventPopup event={props.event}/>
                        </div>
                    </div>
                )}
            </Event>
        </div>

    );
}

export default EventBox;