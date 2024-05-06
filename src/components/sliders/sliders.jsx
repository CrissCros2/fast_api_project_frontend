import {CardSlider} from "../card_slider/card_slider";
import { PersonForm } from "../person_create/person_create";
import {SliderDirection} from "../../constants";
import { EventForm } from "../event_create/event_create";
import React from "react";

export function Sliders() {
    return (
        <>
            <CardSlider
                card={EventForm}
                direction={SliderDirection.Down}
                show_text={"Create Event"}
            />
            <CardSlider
                card={PersonForm}
                direction={SliderDirection.Up}
                show_text={"Create Person"}
            />
        </>
    );
}