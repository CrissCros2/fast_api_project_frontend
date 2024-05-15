import React, { useState } from 'react';
import './calendar.css';
import {Stack} from "@mui/joy";
import Grid from "@mui/joy/Grid"; // Import CSS for styling
import Box from '@mui/material/Box';


const Calendar = () => {
    const getMonday = (date) => {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when Sunday is the start of the week
        return new Date(date.setDate(diff));
    };

    const [startDate, setStartDate] = useState(getMonday(new Date())); // Start from Monday

    const handlePrevWeek = () => {
        // Function to handle clicking on the "Previous Week" button
        // Update the startDate to previous week
        const prevWeek = new Date(startDate);
        prevWeek.setDate(prevWeek.getDate() - 7);
        setStartDate(prevWeek);
    };

    const handleNextWeek = () => {
        // Function to handle clicking on the "Next Week" button
        // Update the startDate to next week
        const nextWeek = new Date(startDate);
        nextWeek.setDate(nextWeek.getDate() + 7);
        setStartDate(nextWeek);
    };

    // Function to generate 30-minute time slots
    const generateTimeSlots = () => {
        const timeSlots = [];
        let currentTime = new Date();
        currentTime.setHours(0, 0, 0, 0); // Reset time to midnight

        for (let i = 0; i < 48; i++) {
            const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timeSlots.push(
                <div key={i} className="time-slot">
                    {timeString}
                </div>
            );
            currentTime.setMinutes(currentTime.getMinutes() + 30);
        }

        return timeSlots;
    };

    const generateEmptySlots = () => {
        let slots = []
        for (let i = 0; i < 48; i++) {
            slots.push(
                <div key={i} className="empty-slot">
                </div>
            );
        }

        return slots;
    }

    // Function to generate dates for the current week
    const generateDatesForWeek = () => {
        const dates = [];
        let currentDate = new Date(startDate);

        for (let i = 0; i < 7; i++) {
            const dateString = currentDate.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
            dates.push(
                <div key={i} className="date">
                    {dateString}
                </div>
            );
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return (
            <Stack direction="row" className="dates-stack">
                {dates}
            </Stack>
        );
    };

    const CreateDays = () => {
        // Create an array to hold the seven <Stack> components
        const sevenStacks = [];

        // Loop to generate seven instances of <Stack>
        for (let i = 0; i < 7; i++) {
            sevenStacks.push(
                <Stack key={i} className="dates-stack" width={String(100/7) + "%"}>
                    <Stack>
                        {generateEmptySlots()}
                    </Stack>
                </Stack>
            );
        }

        // Render the seven <Stack> components
        return (
            <Stack direction="row">
                {sevenStacks}
            </Stack>
        );
    }

    return (
        <div className="calendar">

            <Box sx={{ width: '100%' }}>
                <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                    <Grid item xs={1}>
                        <div className="week-label">
                            {startDate.toLocaleDateString(undefined, {month: 'long', year: 'numeric'})}
                        </div>
                    </Grid>
                    <Grid item xs={11}>
                        <div className="header">
                            <div>
                                <button className="nav-button" onClick={handlePrevWeek}>‹</button>
                                <button className="nav-button" onClick={handleNextWeek}>›</button>
                            </div>
                            <div className="header-dates">
                                {generateDatesForWeek()}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="slots">
                            {generateTimeSlots()}
                        </div>
                    </Grid>
                    <Grid item xs={11}>
                        <div className="cal-content">
                            {
                                CreateDays()
                            }
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Calendar;
