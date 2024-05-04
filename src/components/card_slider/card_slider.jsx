import React, { useState } from 'react';
import './card_slider.css'; // import the CSS file
import {CreatePerson} from '../person_create/person_create';



export function CardSlider() {
    const [isVisible, setIsVisible] = useState(true);

    const slide_down = () => {
        const slider = document.querySelector('.slide_from_top');
        slider.classList.add('slide_to_top');
        slider.classList.remove('slide_from_top');
        setIsVisible(false);
    }

    const slide_up = () => {
        const slider = document.querySelector('.slide_to_top');
        slider.classList.remove('slide_to_top');
        slider.classList.add('slide_from_top');
        setIsVisible(true);
    }

    return (
        <div>
            <div className={isVisible ? 'slide_from_top' : 'slide_to_top'} style={{position: "absolute",
                left: "0",
                right: "200px",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100px",
                height: "200px",
                marginBottom: "auto",
                marginTop: "auto",
                top: "0",
                bottom: "0"}}>
                {CreatePerson()}
            </div>
            <button onClick={isVisible ? slide_down : slide_up}>Test</button>
        </div>

    );
}

