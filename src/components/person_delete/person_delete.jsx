import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Button from "@mui/joy/Button";
import React, {useState} from "react";
import {DeletePerson} from "../../apiCalls";
import {PersonSelect} from "../person_select/person_select";

const CenteredItem = styled(Sheet)(() => ({
    textAlign: 'center',
    background: 'transparent'
}));

export function PersonDelete({slide_out, setPersonsUpdated, persons}) {
    const [selectedPerson, setSelectedPerson] = useState([]);

    const handleSubmit = (event) => {
        if (selectedPerson.persons.id !== undefined){
            DeletePerson(selectedPerson.persons.id);
            event.preventDefault();
            slide_out();
            setPersonsUpdated(true);
            setSelectedPerson([]);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{width: '15%'}}
                alignItems="center"
                display="flex"
                alignContent='center'
                data-testid="delete-person-box">
                <Card variant="solid">
                    <Grid direction="column" justifyContent="center" alignItems="center" container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid xs={8}>
                            <CenteredItem><Typography level="title-md" textColor="white">Delete Person:</Typography></CenteredItem>
                        </Grid>
                        <Grid xs={8}>
                            <PersonSelect setInputs={setSelectedPerson} persons={persons} multiple={false}/>
                        </Grid>
                        <Grid xs={8}>
                            <CenteredItem> <Button type='submit' variant="solid">Delete Person</Button></CenteredItem>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </form>
    );
}

