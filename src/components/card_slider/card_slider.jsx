import React, { useState } from 'react';
import './card_slider.css';
import Button from "@mui/joy/Button"; // import the CSS file



export function CardSlider({card, direction}) {
    const [isVisible, setIsVisible] = useState(true);

    const slide_onto_screen = (class_label_current, class_label_replacement) => {
        const slider = document.querySelector("." + class_label_current);
        if (slider != null)
        {
            slider.classList.remove(class_label_current);
            slider.classList.add(class_label_replacement);
        }
    }

    const slide_out_of_screen = (class_label_current, class_label_replacement) => {
        const slider = document.querySelector("." + class_label_current);
        if (slider != null)
        {
            slider.classList.remove(class_label_current);
            slider.classList.add(class_label_replacement);
        }
    }

    const show_slider = () => {
        slide_onto_screen(directions[0], directions[1]);
        setIsVisible(!isVisible);
    }

    const hide_slider = () => {
        slide_out_of_screen(directions[1], directions[0]);
        setIsVisible(false);
    }

    const get_direction_class_names = () => {
        switch (direction)
        {
            case 0:
                return ['slide_up_to_top', 'slide_down_from_top'];
            case 1:
                return ['slide_down_to_bottom', 'slide_up_from_bottom'];
            default:
                return ['slide_up_to_top', 'slide_down_from_top'];
        }
    }
    const directions = get_direction_class_names()


    return (
        <>
            <div className={`overlay ${isVisible ? 'visible' : ''}`} onClick={hide_slider}>
                <div className={isVisible ? directions[1] : directions[0]} style={{margin: "auto", width: "15%"}}
                     onClick={(event) => {event.stopPropagation()}}>
                    {card}
                </div>
            </div>

            <Button onClick={show_slider}>Show Slider</Button>
        </>

    );
}

