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
  handleTab: (a: number) => void;
  onDelete: (id: number) => void;
}

const CartTab: React.FC<CartTAbPropsType> = (props) => {
  const { cartList, active, handleTab, onDelete } = props;
  const [carts, setCarts] = useState<Cart[]>(cartList);
  const [open, setOpen] = useState<boolean>(false);
  const classes = cartItemStyles();
  const handleAddTab = () => {
    let lastId = carts.length ? carts[carts.length - 1].id : 1;
    console.log({ lastId });
    let newCart = {_id: "", id: lastId + 1, time: new Date() };
    handleSaveCart(newCart);
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

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setCarts(carts);
  }, [carts]);
  return (
    <div className={classes.appBar}>
      <List>
        {carts.map((cart) => (
          <ListItem key={cart.id + ''} className={classes.tab}>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleTab(cart.id)
              }
              className={`${classes.buttonTab} ${
                cart.id === active ? `${classes.selectedTab}` : ''
              }`}
            >
              <div className={classes.id}>{cart.id}</div>
              <div className={classes.time}>
                {cart.time.getHours().toString() +
                  ':' +
                  cart.time.getMinutes().toString()}
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
