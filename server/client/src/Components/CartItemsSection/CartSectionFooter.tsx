import { Button, List, ListItem, ThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import Divider from '@material-ui/core/Divider/Divider';
import React, { useEffect, useState } from 'react';
import { cartFooterStyles } from './FooterStyle';
import { projectTheme } from '../../Styles/Style';
import ConfirmDialog from '../Dialog/ConfirmDialog';
import PopUp from '../PopUp/PopUp';
import Paper from '@material-ui/core/Paper/Paper';

interface CartSectionFooterPropsType {
  totalPrice: number;
  itemsQuantity: number;
  onDelete: () => void;
}

const CartSectionFooter: React.FC<CartSectionFooterPropsType> = (props) => {
  const { totalPrice, itemsQuantity, onDelete } = props;
  const [tax, setTax] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [total, setTotal] = useState<number>(totalPrice);
  const [open, setOpen] = useState<boolean>(false);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  const handleOpenPopUp = () => {
    setOpenPopUp(true);
  };

  const handleDiscountChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let newDiscount = parseInt(e.target.value, 10);
    setDiscount(newDiscount ? newDiscount : 0);
  };
  const handleTaxChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let newTax = parseInt(e.target.value, 10);
    setTax(newTax ? newTax : 0);
  };
  const classes = cartFooterStyles();

  useEffect(() => {
    setTax(0);
    setDiscount(0);
  }, [totalPrice, itemsQuantity]);
  useEffect(() => {
    let taxEffect = totalPrice * (tax / 100);
    let discountEffect = (discount / 100) * totalPrice;
    let newTotalPrice = taxEffect + totalPrice - discountEffect;
    setTotal(newTotalPrice);
  }, [tax, discount]);
  return (
    <>
      <List className={classes.list}>
        <ListItem>
          <Box className={classes.topic}>Sub Total</Box>
          <div className={classes.data}>
            <Box>{totalPrice} GTQ</Box>
            <Box>{itemsQuantity} items</Box>
          </div>
        </ListItem>
        <Divider />
        <ListItem>
          <Box className={classes.topic}>Order TAX</Box>
          <div className={classes.data}>
            <Box>
              <input
                className={classes.discountText}
                type="text"
                value={tax}
                onChange={(
                  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => handleTaxChange(e)}
              />
            </Box>
            <Box>{(totalPrice * tax) / 100} GTQ</Box>
          </div>
        </ListItem>
        <Divider />
        <ListItem>
          <Box className={classes.topic}>Discount</Box>
          <div className={classes.data}>
            <Box>
              <input
                className={classes.discountText}
                type="text"
                value={discount}
                onChange={(
                  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => handleDiscountChange(e)}
              />
            </Box>
            <Box>{(totalPrice * discount) / 100} GTQ</Box>
          </div>
        </ListItem>
        <Divider />
        <ListItem>
          <Box className={classes.topic}>Total</Box>
          <Box className={classes.total}>{total ? total : totalPrice} GTQ</Box>
        </ListItem>
      </List>
      <footer className={classes.footer}>
        <Button
          variant="contained"
          className={classes.cancelButton}
          onClick={handleOpen}
        >
          CANCEL
        </Button>
        <Button
          variant="contained"
          className={classes.payamentButton}
          onClick={handleOpenPopUp}
        >
          PAYAMENT
        </Button>
        <ConfirmDialog isOpen={open} onClose={handleClose} onConfirm={onDelete}>
          Are you sure you want to delete this cart?
        </ConfirmDialog>
        <PopUp
          title="Payment"
          color="#2ECC71"
          openPopup={openPopUp}
          setOpenPopup={setOpenPopUp}
          onClose={handleClosePopUp}
        >
          <div className={classes.payamentPopUp}>
            <Box>
              <b>Total Price</b>
            </Box>
            <Box>{total ? total : totalPrice} GTQ</Box>
          </div>
          <div className={classes.payamentPopUp}>
            <Box>
              <b>Quantity</b>
            </Box>
            <Box>{itemsQuantity} items</Box>
          </div>
        </PopUp>
      </footer>
    </>
  );
};

export default CartSectionFooter;
