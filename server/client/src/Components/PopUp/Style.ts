import makeStyles from '@material-ui/core/styles/makeStyles';
import { Height } from '@material-ui/icons';

export const popupStyles = makeStyles((theme) => ({
  dialogWrapper: {
    width: '33%',
    position: 'absolute',
    top: theme.spacing(2),
    Height: '150px'
  },
  dialogTitle: {
    color: 'white',
    backgroundColor: '#18293D'
  }
}));
