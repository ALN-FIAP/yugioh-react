import { createTheme, Typography } from '@material-ui/core';
import {red, grey} from '@material-ui/core/colors';

export default createTheme({
    palette: {
        primary: {
            main: red[500]
        }
    },
    typography: {
        h2: {
            color: grey[800],
            fontSize: 26
        }
    }
});