import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import Grid from '@material-ui/core/Grid/Grid';
import React, { useEffect, useState } from 'react';
import { Cart, Item } from '../../Types';
import CartTab from './CartTab';
import { cartItemStyles } from './Style';
import CartSection from './CartSection';

interface CartItemsSectionPropsTypes {
  cartList: Cart[];
  getActiveCart: (cartdId: number) => void;
  itemData: Item[];
  isAddItem: boolean;
}

const CartItemsSection: React.FC<CartItemsSectionPropsTypes> = (props) => {
  const { cartList, getActiveCart, itemData, isAddItem } = props;
  const [data, setData] = useState<Cart[]>([]);
  //const [activeData, setActiveData] = useState<Item[]>(itemData);
  const [activeCartData, setActiveCartData] = useState<Item[]>(itemData);
  const [active, setActive] = useState<number>(0);
  const classes = cartItemStyles();

  const handleCartDelete = (id: number) => {
    setData(cartList.filter((item) => item.id !== id));
  };
  const handleCancelCart = (id: number) => {
    setData(cartList.filter((item) => item.id !== id));
  };
  useEffect(() => {
    setActiveCartData(itemData.filter((item) => item.cartId == active));
  }, [itemData]);

  useEffect(() => {
    setActiveCartData(itemData.filter((item) => item.cartId == active));
    console.log({ itemData, activeCartData });
    getActiveCart(active);
  }, [active]);

  useEffect(() => {
    setActiveCartData([]);
  }, [data]);

  console.log({ itemData, activeCartData });
  return (
    <Paper className={classes.root}>
      <Grid container item xs={12} spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <CartTab
            cartList={data}
            active={active}
            handleTab={(data) => setActive(data)}
            onDelete={handleCartDelete}
          />
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CartSection
            onDelete={() => handleCancelCart(active)}
            itemList={activeCartData}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItemsSection;
