import React, { useState } from 'react';
import './card_slider.css';
import Button from "@mui/joy/Button"; // import the CSS file
import {SliderDirection} from "../../constants"


export const slide_onto_screen = (class_label_current, class_label_replacement) => {
    const slider = document.querySelector("." + class_label_current);
    if (slider != null)
    {
        slider.classList.remove(class_label_current);
        slider.classList.add(class_label_replacement);
    }
}

export const slide_out_of_screen = (class_label_current, class_label_replacement) => {
    const slider = document.querySelector("." + class_label_current);
    if (slider != null)
    {
        slider.classList.remove(class_label_current);
        slider.classList.add(class_label_replacement);
    }
}

export const get_direction_class_names = (direction) => {
    switch (direction)
    {
        case SliderDirection.Up:
            return ['slide_up_to_top', 'slide_down_from_top'];
        case SliderDirection.Down:
            return ['slide_down_to_bottom', 'slide_up_from_bottom'];
        case SliderDirection.Left:
            return ["slide_right_to_left", "slide_left_from_right"];
        case SliderDirection.Right:
            return ["slide_left_to_right", "slide_right_from_left"];
        default:
            return ['slide_up_to_top', 'slide_down_from_top'];
    }
}

export function CardSlider({Card, direction, show_text, setPersonsUpdated, persons}) {
    const [isVisible, setIsVisible] = useState(false);

    const show_slider = () => {
        slide_onto_screen(directions[0], directions[1]);
        setIsVisible(!isVisible);
    }

    const hide_slider = () => {
        slide_out_of_screen(directions[1], directions[0]);
        setIsVisible(false);
    }

    const directions = get_direction_class_names(direction)

    return (
        <>
            <div className={`overlay ${isVisible ? 'visible' : ''}`} onClick={hide_slider} data-testid="Hide Slider">
                <div className={isVisible ? directions[1] : directions[0]} style={{margin: "auto", width: "15%"}}
                     onClick={(event) => {event.stopPropagation()}} data-testid="slider">
                    {<Card slide_out={hide_slider}
                            setPersonsUpdated={setPersonsUpdated}
                            persons={persons}/> }
                </div>
            </div>
            <Button onClick={show_slider} data-testid="Show Slider">{show_text}</Button>
        </>

    );
}

