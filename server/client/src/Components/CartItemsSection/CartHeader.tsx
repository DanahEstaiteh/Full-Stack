import React from 'react';
import {faMoneyBill, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Controls from '../Controls';
import { cartItemStyles } from './Style';

const CartHeader = () => {
    const client : {id : number , title: string}[] = [{id : 1 ,title:"Walk in Customer"}];
    const classes = cartItemStyles();
    return (
        <>
            <div className={classes.cartHeader}>
                <h3>Choose Client</h3>
                <div> <FontAwesomeIcon icon={faMoneyBill} />
                <FontAwesomeIcon icon={faUserPlus}/>
                </div>
            </div>
            <div>
                <Controls.Select 
                 name="Choose Client"
                 value={""}
                 error={""}
                 onChange={() => console.log("client")}
                 options={client}
                />
            </div>
            <div></div>
        </>
    )
}

export default CartHeader;
