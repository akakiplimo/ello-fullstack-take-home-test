import { createTheme } from "@mui/material";
import Colors from "./Colors.ts";

const theme = createTheme({
    typography: {
        fontFamily: `"Mulish", sans-serif`,
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