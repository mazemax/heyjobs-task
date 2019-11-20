import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

/**
 * Create a theme instance for Material UI
 * @type {Theme}
 */
const materialTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#EDBC2C'
        },
        secondary: {
            main: '#D75992'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#fff'
        }
    }
});

export default materialTheme;
