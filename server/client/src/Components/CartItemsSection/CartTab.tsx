import Button from '@material-ui/core/Button/Button';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import React, { useEffect, useState } from 'react';
import { Cart } from '../../Types';
import { cartItemStyles } from './Style';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ConfirmDialog from '../Dialog/ConfirmDialog';
import { addNewCart } from '../../PosAPIS/CartAPIs';

interface CartTAbPropsType {
  cartList: Cart[];
  active: number;
  handleChangeActive: (cart: Cart) => void;
  onDelete: (id : number) => void;
  onSaveCart: (newCart : Cart) => void;
}

const CartTab: React.FC<CartTAbPropsType> = (props) => {
  const { cartList, active, handleChangeActive , onDelete ,onSaveCart} = props;
  const [open, setOpen] = useState<boolean>(false);
  const classes = cartItemStyles();
  const handleAddTab = () => {
    let lastId = cartList.length ? cartList[cartList.length - 1].id : 1;
    console.log({ lastId });
    let newCart = {_id: "", id: lastId + 1, time: new Date() };
    onSaveCart(newCart);
  };

 

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.appBar}>
      <List>
        {cartList?.map((cart) => (
          <ListItem key={cart.id + ''} className={classes.tab}>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleChangeActive(cart)
              }
              className={`${classes.buttonTab} ${
                cart.id === active ? `${classes.selectedTab}` : ''
              }`}
            >
              <div className={classes.id}>{cart.id}</div>
              <div className={classes.time}>
                {new Date(cart.time).getHours() +
                  ':' +
                  new Date(cart.time).getMinutes()}
              </div>
            </Button>
          </ListItem>
        ))}
        <ListItem className={classes.tab}>
          <Button
            onClick={handleAddTab}
            className={`${classes.buttonIconTab} ${
              0 === active ? `${classes.selectedTab}` : ''
            }`}
          >
            <AddIcon />
          </Button>
        </ListItem>
        <ListItem className={classes.tab}>
          <Button
            onClick={handleOpen}
            className={`${classes.buttonIconTab} ${
              1 === active ? `${classes.selectedTab}` : ''
            }`}
          >
            <RemoveIcon />
          </Button>
        </ListItem>
        <ConfirmDialog
          isOpen={open}
          onClose={handleClose}
          onConfirm={() => onDelete(active)}
        >
          Are you sure you want to delete this cart?
        </ConfirmDialog>
      </List>
    </div>
  );
};

export default CartTab;
