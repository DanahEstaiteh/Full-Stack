import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles({
  dialogHeader: {
    fontWeight: 'bold',
    fontFamily: 'Raleway, Arial',
    color: 'white',
    fontSize: 20,
    width: '600px',
    height: '30px',
    backgroundColor: '#18293D'
  },
  dialogLabel: {
    color: '#18293D'
  },
  dialogInput: {
    width: '550px',
    height: '30px',
    marginTop: '5px',
    border: '1px gray solid',
    borderRadius: '5px'
  },
  dialogButton: {
    width: '90px',
    height: '20px',
    color: 'black',
    padding: '20px',
    border: '1px solid black'
  },
  dialogSubmitButton: {
    width: '90px',
    height: '20px',
    color: 'white',
    backgroundColor: '#18293D',
    padding: '20px'
  },
  dialog: {
    width: '800px'
  },
  dialogAction: {
    borderTop: '1px solid gray',
    padding: '20px',
    marginTop: '40px'
  }
});
