import { TextInput } from "../text_input/text_input";
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Button from "@mui/joy/Button";
import React from "react";
import axios from "axios";

const CenteredItem = styled(Sheet)(() => ({
    textAlign: 'center',
    background: 'transparent'
}));

export class CreatePersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({name: event});
    }

    handleSubmit(event) {
        axios.post('http://localhost:8000/persons/?person_name=' + this.state.name, {})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Box
                    sx={{width: '15%'}}
                    alignItems="center"
                    display="flex"
                    alignContent='center'
                    data-testid="create-person-box">
                    <Card variant="solid">
                        <Grid direction="column" justifyContent="center" alignItems="center" container spacing={2} sx={{ flexGrow: 1 }}>
                            <Grid xs={8}>
                                <CenteredItem><Typography level="title-md" textColor="white">Create Person</Typography></CenteredItem>
                            </Grid>
                            <Grid xs={8}>
                                {TextInput("Name", this.handleChange)}
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
}
