import { makeStyles } from '@material-ui/core';

export const ProductDetailsStyles = makeStyles({
  media: {
    height: 200,
    width: 200
  },
  root: {
    flexGrow: 1,
    fontSize: '11px'
  },
  paper: {
    overflow: 'hidden',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: '600px',
    height: '320px'
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontFamily: 'Raleway, Arial',
    color: 'white',
    backgroundColor: '#18293D',
    padding: '5px'
  },
  middle: {
    marginLeft: '10px'
  },
  last: {
    marginLeft: '30px',
    display: 'flex',
    flexDirection: 'column',
    width: '210px',
    ':& div > p': {
      margin: '0px'
    }
  },
  first: {},
  itemHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '160px',
    height: '25px',
    '& p': {
      marginBottom: '0px'
    }
  },
  itemValue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '160px',
    height: '25px',

    '& p': {
      marginTop: '0px'
    }
  },
  headLast: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  footer: {
    marginLeft: 'auto',
    marginRight: '10px'
  }
});
