import {Container, Grid, Paper, styled} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function BookAssignmentView() {

    return (
        <Container maxWidth="sm" className="">
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
            </Grid>
        </Container>
    );
}

export default BookAssignmentView;