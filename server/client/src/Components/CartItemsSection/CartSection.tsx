import Grid from '@material-ui/core/Grid/Grid';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import React, { useState } from 'react';
import { Item } from '../../Types';
import { cartItemStyles } from './Style';
import Cart from './Cart';
import CartSectionFooter from './CartSectionFooter';
import { useEffect } from 'react';

interface CartSectionPropsType {
  itemList: Item[];
  onDelete: () => void;
}
const headerlist = ['Product', 'Price', 'Quantity', 'Total'];

const CartSection: React.FC<CartSectionPropsType> = (props) => {
  const { itemList, onDelete } = props;

  const [data, setData] = useState<Item[]>(itemList);
  const classes = cartItemStyles();

  const handleCountChange = (index: number, newCount: number) => {
    const newData = data.map((item, currentIndex) => {
      if (currentIndex === index) {
        return {
          ...item,
          count: newCount
        };
      } else {
        return item;
      }
    });

    setData(newData);
  };

  const handleDelete = (index: number) => {
    const newData = data.filter((item, currentIndex) => currentIndex !== index);
    setData(newData);
  };

  const totalCount = React.useMemo(
    () =>
      data.reduce((acc, item) => {
        return acc + item.count;
      }, 0),
    [data]
  );

  const totalPrice = React.useMemo(
    () =>
      data.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0),
    [data]
  );
  useEffect(() => {
    setData(itemList);
  }, [itemList]);

  return (
    <Grid>
      <List className={classes.headerList}>
        {headerlist.map((header) => (
          <ListItem key={header} className={classes.listItem}>
            {header}
          </ListItem>
        ))}
      </List>
      <Cart
        itemList={data}
        onDelete={handleDelete}
        onCountChange={handleCountChange}
      />
      <CartSectionFooter
        onDelete={onDelete}
        totalPrice={totalPrice}
        itemsQuantity={totalCount}
      />
    </Grid>
  );
};

export default CartSection;
