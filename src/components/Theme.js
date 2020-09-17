import { createMuiTheme } from '@material-ui/core/styles';

const lightGreen = '#81c784'
const lightOrange = '#ffb74d'

export default createMuiTheme({
  palette: {
    common: {
        green: `${lightGreen}`,
        orange: `${lightOrange}`,
    },
    primary: {
        main: `${lightGreen}`,
    },
    secondary: {
        main: `${lightOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      fontSize: '1.5rem',
      fontWeight: '500',
      textTransform: 'none'
    }
  }
});



