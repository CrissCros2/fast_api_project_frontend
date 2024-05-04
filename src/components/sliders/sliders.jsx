import {CardSlider} from "../card_slider/card_slider";
import {CreatePerson} from "../person_create/person_create";
import {SliderDirection} from "../../constants";
import {CreateEvent} from "../event_create/event_create";
import React from "react";

export function Sliders() {
    return (
        <>
            <CardSlider
                card={CreatePerson()}
                direction={SliderDirection.Up}/>
            <CardSlider
                card={CreateEvent()}
                direction={SliderDirection.Down}/>
        </>
    );
}