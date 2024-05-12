import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Button from "@mui/joy/Button";
import React, {useState} from "react";
import {CreatePerson} from "../../apiCalls";
import Input from "@mui/joy/Input";

const CenteredItem = styled(Sheet)(() => ({
    textAlign: 'center',
    background: 'transparent'
}));

export function PersonForm({slide_out, setPersonsUpdated}) {
    const [inputs, setInputs] = useState({
        name: "",
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setInputs({
            ...inputs,
            [event.target.name]: value
        });
    }

    const handleSubmit = (event) => {
        CreatePerson(inputs.name);
        event.preventDefault();
        slide_out();
        setPersonsUpdated(true);
        setInputs({
            name: "",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{width: '15%'}}
                alignItems="center"
                display="flex"
                alignContent='center'
                data-testid="create-person-box">
                <Card variant="solid">
                    <Grid direction="column" justifyContent="center" alignItems="center" container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid xs={8}>
                            <CenteredItem><Typography level="title-md" textColor="white">Create Person:</Typography></CenteredItem>
                        </Grid>
                        <Grid xs={8}>
                            <Input
                                placeholder="Name..."
                                name="name"
                                autoComplete="on"
                                variant="standard"
                                required
                                type="text"
                                value={inputs.name}
                                onChange={handleChange}
                                data-testid="name-input"
                            />
                        </Grid>
                        <Grid xs={8}>
                            <CenteredItem> <Button type='submit' variant="solid">Create Person</Button></CenteredItem>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </form>
    );
}

