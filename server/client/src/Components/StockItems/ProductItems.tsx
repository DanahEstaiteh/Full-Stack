import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';
import { ProductItem } from '../../Types';
import { stockItemStyles } from './Style';

interface ProductItemsProps {
  products: ProductItem[];
  onMoveItem: (item: ProductItem) => void;
}

const ProductItems = (props: ProductItemsProps) => {
  const { products, onMoveItem } = props;
  const classes = stockItemStyles();

  const handleMouseOver = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    count: number
  ) => {
    e.currentTarget.innerHTML = '<p>' + count + '</p>';
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    price: number,
    name: string
  ) => {
    e.currentTarget.innerHTML =
      '<p>' + name + '</p>' + '<p>' + price + ' EURO</p>';
  };

  return (
    <Grid container className={classes.container}>
      {products.map((item) => (
        <Grid item xs={3} key={item.name}>
          <Box
            id={item.name}
            className={classes.box}
            style={{
              backgroundColor: item.color,
              backgroundImage: `Url(${process.env.PUBLIC_URL + item.img})`
            }}
            onClick={() => onMoveItem(item)}
            onMouseOver={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
              handleMouseOver(e, item.count)
            }
            onMouseLeave={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
              handleMouseLeave(e, item.price, item.name)
            }
          >
            <p>{item.name}</p>
            <p>{item.price} EURO </p>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductItems;
