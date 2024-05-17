import React from 'react';

import { Sliders } from './components/sliders/sliders';
import Calendar from "./components/calendar/calendar";

export const events = [
    { id: 1, title: 'Meeting with John', date: '2024-05-15T09:00:00Z', duration: 60 }, // 1 hour
    { id: 2, title: 'Team Standup', date: '2024-05-16T10:00:00Z', duration: 30 }, // 30 minutes
    { id: 3, title: 'Project Deadline', date: '2024-05-17T12:00:00Z', duration: 120 }, // 2 hours
];



function App() {
  return (
      <div data-testid="test-app">
          <Sliders />
          <Calendar events={events}/>
      </div>
  );
}

export default App;
