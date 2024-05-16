import React from 'react';

import { Sliders } from './components/sliders/sliders';
import CalItem from "./components/calendar_item/calendar_item"


function App() {
    const events = [{title: "Test1", desc: "TestDesc"}]
  return (
      <div data-testid="test-app">
          <Sliders />
          <CalItem event={events[0]}/>
      </div>
  );
}

export default App;
