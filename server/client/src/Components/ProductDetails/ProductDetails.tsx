import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Product } from '../../Types';
import { ProductDetailsStyles } from './style';
import { Box, Paper } from '@material-ui/core';
import format from 'date-fns/format';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button/Button';

interface ProductDetailsProps {
  isOpen: boolean;
  data: Product[];
  productId: string;
  onClose: () => void;
 
}

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
  const { isOpen, onClose, data, productId } = props;
  const productToShow = data?.find((pro) => pro._id === productId);
  const classes = ProductDetailsStyles();
  return (
    <Dialog
      maxWidth={'md'}
      open={isOpen}
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
    >
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <h3>Product Deatils</h3>
            <ClearIcon onClick={onClose} />
          </div>
          <div className={classes.container}>
            <div className={classes.first}>
              {
                productToShow?.img ? 
                <img
                src={process.env.PUBLIC_URL + productToShow?.img}
                className={classes.media}
              /> : 
              <Box  style={{
                backgroundColor: productToShow?.color,
                width: '200px', 
                height: '200px'
              }}>

              </Box>
              }
            </div>
            <div className={classes.middle}>
              <h3>{productToShow?.name}</h3>
              <p>Raw Price :{productToShow?.rawPrice} Naira</p>
              <p>Price :{productToShow?.price} Naira</p>
              <p>Product Description :{productToShow?.productDescription}</p>
            </div>
            <div className={classes.last}>
              <div className={classes.headLast}>
                <div className={classes.itemHead}>
                  <p>Code</p>

                  <p>Quantity</p>
                </div>
                <hr style={{ width: '100%' }} />

                <div className={classes.itemValue}>
                  <p> {productToShow?.code}</p>
                  <p> {productToShow?.count}</p>
                </div>
              </div>
              <div className={classes.itemHead}>
                <p>Expiration Date</p>
                <p>
                 { productToShow? 
                    format( new Date(productToShow.expirationDate),'dd/MM/yyyy'): 
                    format( new Date(),'dd/MM/yyyy')
                    }
                   
                </p>
              </div>
              <hr style={{ width: '100%' }} />
            </div>
          </div>

          <hr style={{ width: '100%' }} />
          <footer className={classes.footer}>
            <Button variant="outlined" onClick={onClose}>
              close
            </Button>
          </footer>
        </Paper>
      </div>
    </Dialog>
  );
};

export default ProductDetails;
