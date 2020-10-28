import makeStyles from '@material-ui/core/styles/makeStyles';
import { projectTheme } from '../../Styles/Style';

export const ProductFormStyles = makeStyles((theme: typeof projectTheme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '90%',
      margin: theme.spacing(1)
    }
  },
  textArea: {
    width: '90%'
  },
  input: {
    display: 'none'
  }
}));
