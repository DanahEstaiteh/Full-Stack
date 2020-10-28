import Grid from '@material-ui/core/Grid/Grid';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import React, { useState } from 'react';
import { Item } from '../../Types';
import { cartItemStyles } from './Style';
import Cart from './Cart';
import CartSectionFooter from './CartSectionFooter';
import { useEffect } from 'react';
import { deleteItem } from '../../PosAPIS/CartItemAPIs';

interface CartSectionPropsType {
  itemList: Item[];
  onCancel: () => void;
}
const headerlist = ['Product', 'Price', 'Quantity', 'Total'];

const CartSection: React.FC<CartSectionPropsType> = (props) => {
  const { itemList, onCancel } = props;

  const [items, setItems] = useState<Item[]>([]);
  const classes = cartItemStyles();

  const handleCountChange = (index: number, newCount: number) => {
    const newData = itemList.map((item, currentIndex) => {
      if (currentIndex === index) {
        return {
          ...item,
          count: newCount
        };
      } else {
        return item;
      }
    });

    setItems(newData);
  };

  const handleDeleteItem = (_id: string): void => {
    deleteItem(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Item not deleted');
        }
        setItems(data.allData as Item[]);
      })
      .catch((err) => console.log(err));
  };

  const totalCount = React.useMemo(
    () =>
    itemList.reduce((acc, item) => {
        return acc + item.count;
      }, 0),
    [items]
  );

  const totalPrice = React.useMemo(
    () =>
    itemList.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0),
    [items]
  );
  useEffect(() => {
    //setData(itemList);
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
        itemList={itemList}
        onDelete={handleDeleteItem}
        onCountChange={handleCountChange}
      />
      <CartSectionFooter
        onDelete={onCancel}
        totalPrice={totalPrice}
        itemsQuantity={totalCount}
      />
    </Grid>
  );
};

export default CartSection;
