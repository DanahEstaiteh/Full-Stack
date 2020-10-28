import React from 'react';
import Button from '@material-ui/core/Button';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import { ButtonTheme, useStyles } from './styles';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';

interface PropsType {
  isLogin: boolean;
  login: string;
}

const handleClick = () => {
  alert('login is clicked');
};

const Form: React.FC<PropsType> = (props) => {
  const classes = useStyles();
  const { login, isLogin } = props;
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ width: '41%' }}
      className={classes.root}
    >
      <Grid item>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <h3 className={classes.formName}>MedicKabisha</h3>
            <h5 className={classes.formHeader}>Login to Your Account</h5>
          </Grid>
          <form noValidate autoComplete="off" className={classes.form}>
            <TextField
              variant="outlined"
              className={
                isLogin
                  ? `${classes.formInput} ${classes.formInputSubmit}`
                  : `${classes.formInput}`
              }
              label="UserName"
              disabled={isLogin}
              value={isLogin ? 'Admin' : ''}
              type="text"
              placeholder="UserName"
              fullWidth
            />
            <TextField
              className={
                isLogin
                  ? `${classes.formInput} ${classes.formInputSubmit}`
                  : `${classes.formInput}`
              }
              label="Password"
              type="password"
              disabled={isLogin}
              placeholder="Password"
              value={isLogin ? 'password' : ''}
              fullWidth
            />
            <ThemeProvider theme={ButtonTheme}>
              <Button
                onClick={handleClick}
                className={`${classes.formButton} ${login}`}
                disabled={isLogin}
                variant="contained"
                color="primary"
              >
                Login{' '}
              </Button>
            </ThemeProvider>
            <div>© Demo 2018</div>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
