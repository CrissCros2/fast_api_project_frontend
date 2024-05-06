import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import Button from "@mui/joy/Button";
import React, { useState } from "react";
import Input from '@mui/joy/Input';
import {PersonSelect} from "../person_select/person_select";

const CenteredItem = styled(Sheet)(() => ({
    textAlign: 'center',
    background: 'transparent'
}));

export function EventForm(slide_out) {
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        time: "",
        persons: []
    });

    const handlePersonSelectChange = (selectedPersons) => {
        setInputs({
            ...inputs,
            persons: selectedPersons
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        axios.post('http://localhost:8000/events/', {
            id: uuidv4(),
            title: inputs.title,
            description: inputs.description,
            time: inputs.time,
            persons: inputs.persons
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
        slide_out();
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Box
                alignItems="center"
                display="flex"
                alignContent='center'
                data-testid="create-event-box">
                <Card variant="solid">
                    <Grid direction="column" justifyContent="center" alignItems="center" container spacing={3} sx={{ flexGrow: 1 }}>
                        <Grid xs={8}>
                            <CenteredItem><Typography level="title-md" textColor="white">Create Event:</Typography></CenteredItem>
                        </Grid>
                        <Grid xs={8}>
                            <Input
                                placeholder="Title..."
                                name="title"
                                autoComplete="on"
                                variant="standard"
                                required
                                type="text"
                                value={inputs.title}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid xs={8}>
                            <Input
                                placeholder="Description..."
                                name="description"
                                autoComplete="on"
                                variant="standard"
                                required
                                type="text"
                                value={inputs.description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid xs={8}>
                            <Input
                                type="datetime-local"
                                name="time"
                                variant="standard"
                                required
                                value={inputs.time}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid xs={8}>
                            {PersonSelect(handlePersonSelectChange)}
                        </Grid>
                        <Grid xs={8}>
                            <CenteredItem> <Button type='submit' variant="solid">Create Event</Button></CenteredItem>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </form>
        </>
    );
}
