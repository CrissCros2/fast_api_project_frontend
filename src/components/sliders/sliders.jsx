import {CardSlider} from "../card_slider/card_slider";
import { PersonForm } from "../person_create/person_create";
import {SliderDirection} from "../../constants";
import { EventForm } from "../event_create/event_create";
import React, { useState, useEffect } from 'react';
import {GetAllPersons} from "../../apiCalls";

export function Sliders() {
    const [persons, setPersons] = useState([]);
    const [personsUpdated, setPersonsUpdated] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await GetAllPersons();
                setPersons(result.data);
            } catch (error) {
                // Handle error
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [personsUpdated]);

    return (
        <>
            <CardSlider
                Card={EventForm}
                direction={SliderDirection.Down}
                show_text={"Create Event"}
                persons={persons}
            />
            <CardSlider
                Card={PersonForm}
                direction={SliderDirection.Up}
                show_text={"Create Person"}
                setPersonsUpdated={setPersonsUpdated}
            />
        </>
    );
}