import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const projectTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#81889B'
    },
    secondary: {
      main: '#18293D'
    },
    success: {
      main: '#2ECC71'
    },
    warning: {
      main: '#E74C3C'
    }
  }
});
