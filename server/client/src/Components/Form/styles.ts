import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const ButtonTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4D90FE'
    }
  }
});
export const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px black',
    color: 'black',
    height: '400px',
    padding: '0 41px',
    backgroundColor: '#F7F7F7',
    margin: '20px auto 0px auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& div': {
      width: '100%'
    }
  },
  formInput: {
    marginBottom: '15px',
    width: '300px',
    height: '50px'
  },
  formButton: {
    width: '100%',
    height: '50px',
    color: 'white',
    marginBottom: '15px'
  },
  formHeader: {
    fontWeight: 'bold',
    fontFamily: 'Raleway, Arial',
    margin: '20px 0px',
    fontSize: 20
  },
  formName: {
    fontWeight: 'bold',
    fontFamily: 'Raleway, Arial',
    color: 'white',
    fontSize: 20
  },
  formInputSubmit: {
    backgroundColor: '#FAFFBD'
  },
  form: {}
}));
