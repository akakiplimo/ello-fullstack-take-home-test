import { createTheme } from "@mui/material";
import Colors from "./Colors.ts";

const theme = createTheme({
    typography: {
        fontFamily: `"Mulish", sans-serif`,
        h3: {
            fontSize: '2rem',
            '@media (min-width:600px)': {
                fontSize: '2rem',
            },
            '@media (min-width:960px)': {
                fontSize: '2.5rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '3rem',
            },
        },
    },
    palette: {
        primary: {
            main: Colors.primaryTurquoise,
        },
        secondary: {
            main: Colors.orangeRed,
        },
        error: {
            main: Colors.orangeRed,
        },
        background: {
            default: Colors.white,
            paper: Colors.orangePastel,
        },
        text: {
            primary: Colors.steelBlue,
            secondary: Colors.teal,
        },
    },
})

export default  theme;