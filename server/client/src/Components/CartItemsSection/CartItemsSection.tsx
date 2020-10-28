import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import Grid from '@material-ui/core/Grid/Grid';
import React, { useEffect, useState } from 'react';
import { Cart, Item, Product } from '../../Types';
import CartTab from './CartTab';
import { cartItemStyles } from './Style';
import CartSection from './CartSection';
import { addNewCart, deleteCart, getCarts } from '../../PosAPIS/CartAPIs';
import { getItems } from '../../PosAPIS/CartItemAPIs';

interface CartItemsSectionPropsTypes {
  itemData: Item[];
  activeCart: Cart;
  handleChangeActive : (activeCart: Cart) => void;
}

const CartItemsSection: React.FC<CartItemsSectionPropsTypes> = (props) => {
  const { itemData , activeCart,handleChangeActive} = props;
  
  const [carts, setCarts] = useState<Cart[]>([]);
  const classes = cartItemStyles();

  const fetchCarts = (): void => {
    getCarts()
      .then(({ data: { carts } }: Cart[] | any) => {setCarts(carts)})
      .catch((err: Error) => setCarts([]));
  };
 

  const handleDelete = (id : number) => {
    handleDeleteCart(activeCart._id);
  }
  const handleDeleteCart = (_id: string): void => {
    deleteCart(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! cart not deleted');
        }
        setCarts(data.allData as Cart[]);
      })
      .catch((err) => console.log(err));
  };

  const handleSaveCart = (formData: Cart): void => {
    console.log({formData});
    addNewCart(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! cart not saved');
        }
        setCarts(data.allData as Cart[]);
      })
      .catch((err: any) => console.log(err));
  };

useEffect(() => {
    fetchCarts();
}, [])

 

  
  return (
    <Paper className={classes.root}>
      <Grid container item xs={12} spacing={2} className={classes.container}>
        <Grid item xs={12}>
        <CartTab cartList={carts} active={activeCart.id} onDelete={handleDelete} handleChangeActive={handleChangeActive} onSaveCart={handleSaveCart}/> 
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <CartSection
            onCancel={() => handleDelete(activeCart.id)}
            itemList={itemData}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItemsSection;
