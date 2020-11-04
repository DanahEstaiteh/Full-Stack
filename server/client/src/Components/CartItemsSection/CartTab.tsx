import Button from '@material-ui/core/Button/Button';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import React, { useState } from 'react';
import { Cart } from '../../Types';
import { cartItemStyles } from './Style';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ConfirmDialog from '../Dialog/ConfirmDialog';

interface CartTabPropsType {
  cartList: Cart[];
  activeCartId: number;
  handleChangeActiveCart: (cart: Cart) => void;
  onDelete: (id : number) => void;
  onSaveCart: (newCart : Cart) => void;
}

const CartTab: React.FC<CartTabPropsType> = (props) => {
  const { cartList, activeCartId, handleChangeActiveCart , onDelete ,onSaveCart} = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = cartItemStyles();

const lastId = cartList.length ? cartList[cartList.length - 1].id : 0;
const newCart : Cart = {_id: "", id: lastId + 1, time: new Date() };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={classes.appBar}>
      <List>
        {cartList?.map((cart) => (
          <ListItem key={cart.id + ''} className={classes.tab}>
            <Button
              onClick={() =>
                handleChangeActiveCart(cart)
              }
              className={`${classes.buttonTab} ${
                cart.id === activeCartId ? `${classes.selectedTab}` : ''
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
            onClick={() => onSaveCart(newCart)}
            className={`${classes.buttonIconTab} ${
             -1 === activeCartId ? `${classes.selectedTab}` : ''
            }`}
          >
            <AddIcon />
          </Button>
        </ListItem>
        <ListItem className={classes.tab}>
          <Button
            onClick={handleOpen}
            className={`${classes.buttonIconTab} ${
              0 === activeCartId ? `${classes.selectedTab}` : ''
            }`}
          >
            <RemoveIcon />
          </Button>
        </ListItem>
        <ConfirmDialog
          isOpen={isOpen}
          onClose={handleClose}
          onConfirm={() => onDelete(activeCartId)}
        >
          Are you sure you want to delete this cart?
        </ConfirmDialog>
      </List>
    </div>
  );
};

export default CartTab;
