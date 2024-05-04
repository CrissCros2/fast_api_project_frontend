import { SubmitButton } from "../submit_button/submit_button";
import { NameInput } from "../name_input/name_input";
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

const CenteredItem = styled(Sheet)(() => ({
    textAlign: 'center',
    background: 'transparent'
}));


export function CreatePerson() {
    return (
        <Box
            sx={{width: '15%'}}
            alignItems="center"
            display="flex"
            alignContent='center'>
            <Card variant="solid">
                <Grid direction="column" justifyContent="center" alignItems="center" container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid xs={8}>
                        <CenteredItem><Typography level="title-md" textColor="white">Create Person</Typography></CenteredItem>
                    </Grid>
                    <Grid xs={8}>
                        {NameInput()}
                    </Grid>
                    <Grid xs={8}>
                        <CenteredItem>{SubmitButton("Create Person")}</CenteredItem>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}
