import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme, useStyles } from './styles';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { User } from '../../Types';
import { handleLogin } from '../../PosAPIS/LoginAPI';
import Controls from '../Controls';
import { useHistory } from 'react-router-dom';
interface PropsType {
    isLogin: boolean;
    login: string;
    onLogin: (isLogin: boolean) => void;
}

const Form: React.FC<PropsType> = (props) => {
    const classes = useStyles();
    const { login, isLogin, onLogin } = props;

    const initialLoginValue: User = {
        _id: '',
        userName: '',
        password: ''
    };

    const validationSchema = yup.object({
        userName: yup.string().required('UserName is Required !'),
        password: yup
            .string()
            .required('password is Required !')
            .min(4, 'Password is too short')
            .matches(
                /^[0-9a-zA-Z]+$/,
                'Password must contain letters and number'
            )
    });

    const handleSubmit = (values: User): void => {
        handleLogin(values)
            .then(({ status, data }) => {
                if (status === 404) {
                    throw new Error('Error!');
                }
                onLogin(true);
            })
            .catch((err: any) => console.log(err));
    };

    const loginForm = useFormik({
        initialValues: initialLoginValue,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    });

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
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item>
                        <h3 className={classes.formName}>MedicKabisha</h3>
                        <h5 className={classes.formHeader}>
                            Login to Your Account
                        </h5>
                    </Grid>
                    <form
                        noValidate
                        autoComplete="off"
                        className={classes.form}
                        onSubmit={loginForm.handleSubmit}
                    >
                        <Controls.Input
                            id="UserName"
                            name="userName"
                            label="UserName"
                            disabled={isLogin}
                            value={loginForm.values.userName}
                            error={loginForm.errors.userName}
                            type="text"
                            className={
                                isLogin
                                    ? `${classes.formInput} ${classes.formInputSubmit}`
                                    : `${classes.formInput}`
                            }
                            onChange={loginForm.handleChange}
                        />
                        <Controls.Input
                            id="Password"
                            name="password"
                            label="Password"
                            disabled={isLogin}
                            value={loginForm.values.password}
                            error={loginForm.errors.password}
                            type="password"
                            className={
                                isLogin
                                    ? `${classes.formInput} ${classes.formInputSubmit}`
                                    : `${classes.formInput}`
                            }
                            onChange={loginForm.handleChange}
                        />
                        <ThemeProvider theme={ButtonTheme}>
                            <Controls.MyButton
                                variant="contained"
                                type="submit"
                                color="primary"
                                size="medium"
                                text="Login"
                                className={`${classes.formButton} ${login}`}
                                disabled={isLogin}
                            />
                        </ThemeProvider>
                        <div>© Demo 2018</div>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Form;
