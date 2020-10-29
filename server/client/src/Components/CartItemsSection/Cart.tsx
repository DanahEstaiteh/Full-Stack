import React, { useEffect } from 'react';
import { Item } from '../../Types/index';
import List from '@material-ui/core/List/List';
import CartItem from './CartItem';
import { useState } from 'react';
import { cartFooterStyles } from './FooterStyle';
import EmptyCart from './EmptyCart';

interface CartPropsType {
  itemList: Item[];
  onDelete: (id: string) => void;
  onCountChange: (index: number, newCount: number) => void;
}

const Cart: React.FC<CartPropsType> = (props) => {
  const { itemList, onDelete, onCountChange } = props;

  const classes = cartFooterStyles();
  useEffect(() => {
    
  }, [itemList]);

  return (
    <List className={classes.listItem}>
      {itemList?.length ? (
        itemList.map((item: Item, index: number) => (
          <CartItem
            key={item._id}
            item={item}
            onDelete={() => onDelete(item._id)}
            onChangeItemCount={(count) => {
              onCountChange(index, count);
            }}
          />
        ))
      ) : (
        <EmptyCart />
      )}
    </List>
  );
};

export default Cart;
