import {CardSlider} from "../card_slider/card_slider";
import { PersonForm } from "../person_create/person_create";
import {SliderDirection} from "../../constants";
import { EventForm } from "../event_create/event_create";
import React, {useState, useEffect} from 'react';
import {GetAllPersons} from "../../apiCalls";
import {PersonDelete} from "../person_delete/person_delete";

export function Sliders() {
    const [persons, setPersons] = useState([]);
    const [personsUpdated, setPersonsUpdated] = useState(false);

    useEffect(() => {
        GetAllPersons(setPersons);
    }, [personsUpdated]);

    return (
        <div data-testid="test-sliders">
            <CardSlider
                Card={EventForm}
                direction={SliderDirection.Down}
                show_text={"Create Event"}
                persons={persons}
                testid={"test-event"}
            />
            <CardSlider
                Card={PersonForm}
                direction={SliderDirection.Up}
                show_text={"Create Person"}
                setPersonsUpdated={setPersonsUpdated}
                testid={"test-person"}
            />
            <CardSlider
                Card={PersonDelete}
                direction={SliderDirection.Left}
                show_text={"Delete Person"}
                persons={persons}
                setPersonsUpdated={setPersonsUpdated}
                testid={"test-person"}
            />
        </div>
    );
}