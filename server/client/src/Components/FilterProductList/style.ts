import { makeStyles } from '@material-ui/core';

export const FilterProductStyles = makeStyles({
  dateField: {
    marginLeft: '8px',
    marginRight: '8px',
    width: '200px'
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    '& > *': {
      marginLeft: '20px',
      paddingTop: '10px'
    },
    '& > p': {
      marginLeft: '20px',
      paddingTop: '0px'
    }
  },
  applyButton: {}
});
