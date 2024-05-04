import './App.css';
import React from 'react';
import { CreatePerson } from './components/person_create/person_create';
import { CardSlider } from "./components/card_slider/card_slider";
import { CreateEvent } from './components/event_create/event_create';
import { SliderDirection } from './constants';


function App() {
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

export default App;
