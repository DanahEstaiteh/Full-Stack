import { makeStyles } from '@material-ui/core';

export const cartItemStyles = makeStyles({
  topic: {
    width: '140px'
  },
  box: {
    width: '140px',
    height: '140px',
    borderRadius: '10px',
    color: 'white',
    '& > P': {
      paddingTop: '20px'
    }
  },
  info: {
    paddingTop: '20px'
  },
  tab: {
    display: 'inline',
    padding: '2px'
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'static'
  },
  buttonTab: {
    backgroundColor: '#E2E2E2',
    borderBottom: '3px solid #6EC89B',
    color: '#767B81',
    width: '80px',
    height: '40px'
  },
  buttonIconTab: {
    backgroundColor: '#E2E2E2',
    borderBottom: '3px solid #6EC89B',
    color: '#767B81',
    width: '30px',
    height: '40px',
    padding: '0px'
  },
  selectedTab: {
    backgroundColor: '#767B81',
    borderBottom: '3px solid red',
    color: '#E2E2E2'
  },
  container: {
    padding: '0px 10px'
  },
  divider: {
    height: '5px',
    borderRadius: '5px',
    backgroundColor: '#EEEFEE',
    border: 'solid 1px #767676',
    boxShadow: '1px 1px 1px 1px #767'
  },
  root: {
    width: '100%',
    backgroundColor: '#ECF0F1'
  },
  id: {
    fontSize: '20px'
  },
  time: {
    fontSize: '12px',
    padding: '2px 6px 0px'
  },
  listItem: {
    display: 'inline',
    fontSize: '16px'
  },
  quantityText: {
    width: '30px',

    '& .MuiOutlinedInput-input': {
      padding: '0px',
      width: '30px',
      textAlign: 'center'
    },
    '& .MuiOutlinedInput-root': {
      top: '3px',
      height: '25px'
    }
  },
  quantityIcon: {
    width: '30px',
    height: '30px',
    color: '#B8C6D0'
  },

  deleteIcon: {
    color: 'red',
    paddingRight: '20px'
  },

  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '500px',
    height: '70px',
    color: '#767B81',
    marginBottom: '10px',
    '& > div': {
      padding: '20px'
    }
  },
  quantity: {
    position: 'relative',
    top: '5px',
    paddingLeft: '10px'
  },
  numberItem: {
    width: '10px'
  },
  headerList: {
    width: '450px',
    fontWeight: 'bold',
    color: '#34495E',
    '&>:nth-child(2)': {
      paddingLeft: '65px'
    },
    '&>:last-child': {
      paddingLeft: '60px'
    }
  }
});
