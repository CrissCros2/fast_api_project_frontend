// src/Calendar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { addDays, startOfWeek, format, parseISO, differenceInMinutes, addMinutes, startOfDay } from 'date-fns';
import EventBox from '../event/event';

const HOUR_HEIGHT = 50; // Height of each hour slot in pixels

const CalendarWrapper = styled.div`
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    grid-template-rows: auto 1fr;
    height: 100vh; /* Ensure it takes the full viewport height */
`;

const HeaderWrapper = styled.div`
    display: contents;
`;

const TimeHeaderCell = styled.div`
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    text-align: center;
    padding: 10px;
    font-weight: bold;
`;

const HeaderCell = styled.div`
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    text-align: center;
    padding: 10px;
    font-weight: bold;
`;

const GridWrapper = styled.div`
    display: contents;
`;

const TimeColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const TimeCell = styled.div`
    height: ${HOUR_HEIGHT}px; /* Ensure it matches TimeCell height */
    border: 1px solid #ccc;
    position: relative;
    background-color: #f0f0f0;
    text-align: center;
    font-weight: bold;
    padding-right: 10px;
`;

const DayCell = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const HourSlot = styled.div`
    height: ${HOUR_HEIGHT}px; /* Ensure it matches TimeCell height */
    position: relative;
    border-bottom: 1px solid #ccc;
    border-top: ${({ isFirst }) => (isFirst ? 'none' : '1px solid #ccc')}; /* Apply border only if it's not the first time slot */
`;

const Calendar = ({ events }) => {
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const startOfCurrentWeek = startOfWeek(currentWeek, { weekStartsOn: 1 });

    const days = Array.from({ length: 7 }, (_, i) => addDays(startOfCurrentWeek, i));
    const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

    const calculateEventPosition = (event) => {
        const eventStart = parseISO(event.date);
        const eventEnd = addMinutes(eventStart, event.duration);
        const startOfDayTime = startOfDay(eventStart);

        // Calculate the total height of the cell accounting for borders
        const cellHeight = HOUR_HEIGHT + 2; // Height of each hour slot plus 1 pixel for the top border

        // Calculate the top position of the event, compensating for the borders
        const top = (differenceInMinutes(eventStart, startOfDayTime) / 60) * cellHeight - cellHeight;

        // Calculate the height of the event, compensating for the borders
        const height = (differenceInMinutes(eventEnd, eventStart) / 60) * cellHeight;

        return { top, height };
    };

    return (
        <CalendarWrapper>
            <HeaderWrapper>
                <TimeHeaderCell></TimeHeaderCell>
                {days.map(day => (
                    <HeaderCell key={day}>
                        {format(day, 'EEE, MMM d')}
                    </HeaderCell>
                ))}
            </HeaderWrapper>
            <GridWrapper>
                <TimeColumn>
                    {hours.map((hour, i) => (
                        <TimeCell key={i}>{hour}</TimeCell>
                    ))}
                </TimeColumn>
                {days.map(day => (
                    <DayCell key={day}>
                        {hours.map((_, i) => (
                            <HourSlot key={i} isFirst={i === 0}></HourSlot>
                        ))}
                        {events
                            .filter(event => format(parseISO(event.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
                            .map(event => {
                                const { top, height } = calculateEventPosition(event);
                                return (
                                    <EventBox key={event} event={event} top={top} height={height} />
                                );
                            })}
                    </DayCell>
                ))}
            </GridWrapper>
        </CalendarWrapper>
    );
};

export default Calendar;
