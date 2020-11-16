import React from 'react';
import { faMoneyBill, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Controls from '../Controls';
import { cartItemStyles } from './Style';
import Grid from '@material-ui/core/Grid/Grid';

const CartHeader = () => {
    const client: { id: number; title: string }[] = [
        { id: 1, title: 'Walk in Customer' }
    ];
    const classes = cartItemStyles();
    return (
        <Grid container>
            <Grid item xs={12} className={classes.cartHeader}>
                <h3>Choose Client</h3>
                <div>
                    {' '}
                    <FontAwesomeIcon
                        icon={faMoneyBill}
                        className={classes.cartHeaderIcon}
                    />
                    <FontAwesomeIcon
                        icon={faUserPlus}
                        className={classes.cartHeaderIcon}
                    />
                </div>
            </Grid>
            <Grid item xs={12}>
                <Controls.Select
                    name="Choose Client"
                    value={'Walk in Customer'}
                    error={''}
                    onChange={() => console.log('client')}
                    options={client}
                />
            </Grid>
            <Grid item xs={12}></Grid>
        </Grid>
    );
};

export default CartHeader;
