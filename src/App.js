import React from 'react';

import { Sliders } from './components/sliders/sliders';
import Calendar from "./components/calendar/calendar";


function App() {
  return (
      <div data-testid="test-app">
          <Sliders />
          <Calendar />
      </div>
  );
}

export default App;
