import React, { useEffect } from 'react';
import { Item } from '../../Types/index';
import List from '@material-ui/core/List/List';
import CartItem from './CartItem';
import { useState } from 'react';
import { cartFooterStyles } from './FooterStyle';
import EmptyCart from './EmptyCart';

interface CartPropsType {
  itemList: Item[];
  onDelete: (index: number) => void;
  onCountChange: (index: number, newCount: number) => void;
}

const Cart: React.FC<CartPropsType> = (props) => {
  const { itemList, onDelete, onCountChange } = props;

  const [data, setData] = useState<Item[]>(itemList);
  const classes = cartFooterStyles();
  useEffect(() => {
    setData(itemList);
  }, [itemList]);

  return (
    <List className={classes.listItem}>
      {data.length ? (
        data.map((item: Item, index: number) => (
          <CartItem
            key={item.name}
            item={item}
            onDelete={() => onDelete(index)}
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
