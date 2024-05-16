const EventPopup = (props) => {
    return (
        <div className="event-popup">
            <div className="event-popup__content">
                <h2>{props.event.title}</h2>
                <p>{props.event.desc}</p>
            </div>
        </div>
    );
}

export default EventPopup;