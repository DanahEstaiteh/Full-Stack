import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerListLeft: {
    display: 'flex',
    padding: '40px 40px 40px 0px',
    alignItems: 'center',
    zIndex: 1,
    top: 0
  },
  header: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
    width: '100%',
    top: 0,
    height: '70px',
    boxShadow: '2px 2px 2px 1px grey'
  },
  item: {
    listStyleType: 'none',
    color: 'gray',
    paddingLeft: '20px'
  },
  lisItem: {
    marginBottom: '2px',
    listStyleType: 'none',
    color: 'gray',
    paddingLeft: '20px'
  },
  headerLink: {
    color: 'gray',
    paddingLeft: '3px'
  },
  UserImage: {
    width: '30px',
    height: '30px'
  },
  UserType: {
    paddingLeft: '10px'
  },
  headerListRight: {
    display: 'flex',
    padding: '40px 0px 40px 40px',
    alignItems: 'center',
    color: 'gray'
  },
  itemDrop: {
    paddingRight: '0px'
  },
  arrowDropDown: {
    color: 'gray',
    marginBottom: '-6px'
  },
  nested: {
    padding: '5px'
  },
  nestedList: {
    position: 'absolute',
    top: '63px'
  },
  linkIcon: {
    paddingRight: '5px'
  },
  [`@media (max-width: 1200px)`]: {
    item: {
      paddingLeft: '10px'
    },
    lisItem: {
      paddingLeft: '10px'
    },
    header: {
      fontSize: '14px'
    }
  }
});

export default useStyles;
