import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import Grid from '@material-ui/core/Grid/Grid';
import React, { useEffect, useState } from 'react';
import { Cart, Item, Product } from '../../Types';
import CartTab from './CartTab';
import { cartItemStyles } from './Style';
import CartSection from './CartSection';
import { addNewCart, deleteCart, getCarts } from '../../PosAPIS/CartAPIs';
import { deleteItem } from '../../PosAPIS/CartItemAPIs';
import CartHeader from './CartHeader';


interface CartItemsSectionPropsTypes {
  itemData: Item[];
  activeCart: Cart;
  cartList: Cart[];
  handleChangeActive : (activeCart: Cart) => void;
  handleDeleteItem: (id : string) => void;
  handleDeleteActiveCart: (activeItem : Item[]) => void;
  handleSaveCart: (cart : Cart) => void;
}

const CartItemsSection: React.FC<CartItemsSectionPropsTypes> = (props) => {
  const { itemData , activeCart,handleChangeActive , handleDeleteItem , handleDeleteActiveCart, handleSaveCart, cartList} = props;
  
  
  const [activeItem, setActiveItem] = useState<Item[]>([]);
  const classes = cartItemStyles();


 
  



const getActiveItems = () => {
  console.log(activeCart.id)
  if(activeCart.id < 1){
    setActiveItem([]);
  }else{
    const activeItem = itemData?.filter((item) => item.cartId === activeCart.id);
    setActiveItem(activeItem);
  }
  
}



useEffect(() => {
    
}, []);

useEffect(() => {
  getActiveItems();
}, [activeCart])
  return (
    <Paper className={classes.root}>
      <Grid container item xs={12} spacing={2} className={classes.container}>
        <Grid item xs={12}>
        <CartTab cartList={cartList} activeCartId={activeCart.id} onDelete={() => handleDeleteActiveCart(activeItem)} handleChangeActiveCart={handleChangeActive} onSaveCart={handleSaveCart}/> 
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12}>
          <CartHeader />
        </Grid>
        </Grid>
        <Grid item xs={12}>
        <CartSection
            itemList={activeItem}
            handleDeleteItem={handleDeleteItem}
            onCancel={() => handleDeleteActiveCart(activeItem)}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItemsSection;
