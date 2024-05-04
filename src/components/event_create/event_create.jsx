import { SubmitButton } from "../submit_button/submit_button";
import { TextInput } from "../text_input/text_input";
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CenteredItem = styled(Sheet)(() => ({
    textAlign: 'center',
    background: 'transparent'
}));


export function CreateEvent() {
    return (
        <Box
            alignItems="center"
            display="flex"
            alignContent='center'
            data-testid="create-event-box">
            <Card variant="solid">
                <Grid direction="column" justifyContent="center" alignItems="center" container spacing={3} sx={{ flexGrow: 1 }}>
                    <Grid xs={8}>
                        <CenteredItem><Typography level="title-md" textColor="white">Create Event</Typography></CenteredItem>
                    </Grid>
                    <Grid xs={8}>
                        {TextInput("Title")}
                    </Grid>
                    <Grid xs={8}>
                        {TextInput("Description")}
                    </Grid>
                    <Grid xs={8}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker label="Event Time" sx={{borderRadius: "5px"}}/>
                        </LocalizationProvider>
                    </Grid>
                    <Grid xs={8}>
                        <CenteredItem>{SubmitButton("Create Event")}</CenteredItem>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}
