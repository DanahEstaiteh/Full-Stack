import makeStyles from '@material-ui/core/styles/makeStyles';

export const categoryStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '30px'
  },
  list: {
    border: '2px solid #DDDDDD',
    width: '92%',
    marginLeft: ' 4%',
    color: 'gray',
    '&:nth-child(odd)': {
      backgroundColor: '#F9F9F9'
    }
  },
  row: {
    '&:nth-child(even)': {
      backgroundColor: '#F9F9F9'
    },
    height: '50px',
    borderRight: 'none',
    textAlign: 'center'
  },
  headerList: {
    border: '2px solid #DDDDDD',
    width: '92%',
    marginLeft: ' 4%',
    color: 'gray'
  },
  listItem: {
    border: '1px solid #DDDDDD',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row'
  },
  actionIcon: {
    color: 'black',
    border: '1px gray solid',
    backgroundColor: 'white',
    '&:first-child': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px'
    },
    '&:nth-child(2)': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px'
    }
  },
  headerItem: {
    backgroundColor: '#F9F9F9',
    border: '1px solid #DDDDDD',
    borderBottom: 'none',
    height: '35px',
    padding: '10px 10px 0px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '50px 60px 10px'
  },
  searchBox: {
    height: '25px'
  },
  headerButton: {
    height: '40px',
    width: '120px',
    backgroundColor: '#34495E',
    color: 'white',
    borderRadius: '5px'
  }
});
