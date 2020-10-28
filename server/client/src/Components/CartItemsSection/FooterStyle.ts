import makeStyles from '@material-ui/core/styles/makeStyles';
import { projectTheme } from '../../Styles/Style';

export const cartFooterStyles = makeStyles({
  topic: {
    width: '200px',
    backgroundColor: '#F5F5F5',
    height: '25px',
    borderRight: '1px solid black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '10px'
  },
  list: {
    width: 'fit-content',
    padding: '10px',
    '& >li': {
      height: '45px',
      padding: '0px'
    }
  },
  discountText: {
    border: 'none',
    backgroundColor: '#F5F5F5',
    width: '50px',
    height: '30px',
    color: '#66678A',
    fontSize: 'medium'
  },
  total: {
    color: '#2ECC71',
    padding: '10px'
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '250px',
    color: '#66678A',
    '& > *': {
      padding: '10px'
    }
  },
  listItem: {
    height: '150px',
    overflowY: 'scroll'
  },
  payamentButton: {
    backgroundColor: '#2ECC71',
    padding: '10px',
    width: '250px',
    height: '50px',
    color: 'white',
    fontWeight: 'bold'
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: '10px',
    width: '250px',
    height: '50px',
    color: 'white',
    fontWeight: 'bold'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  payamentPopUp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15px'
  }
});
