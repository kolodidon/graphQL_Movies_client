import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    color: '#fff',
  },
  palette: {
    type: 'light',
    primary: {
      main: '#336fde'
    },
    secondary: yellow,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    contrastText: '#fff',
  }
});
