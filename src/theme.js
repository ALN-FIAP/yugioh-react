import { createTheme } from '@mui/material/styles';
import {red, grey} from '@mui/material/colors';

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