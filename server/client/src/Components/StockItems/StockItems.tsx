import { Divider, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import React, { useEffect, useState } from 'react';
import { CategoryTitle, ProductItem } from '../../Types';

import ProductItems from './ProductItems';
import StockTabs from './StockTabs';
import { stockItemStyles } from './Style';
import Search from '../Search/Search';

interface StockItemsPropsType {
  categoryNames: CategoryTitle[];
  productsItem: ProductItem[];
  onMoveItem: (item: ProductItem) => void;
}

const StockItems: React.FC<StockItemsPropsType> = (props) => {
  const { categoryNames, productsItem, onMoveItem } = props;
  const [active, setActive] = useState<string>('home');
  const [products, setProducts] = useState<ProductItem[]>(productsItem);
  const classes = stockItemStyles();
  //const allData = getProductItem(active);
  useEffect(() => {
    if (active) {
     // setProducts(getProductItem(active));
    }
  }, [active]);

  return (
    <Paper className={classes.root}>
      <Grid container item xs={12} spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <StockTabs
            categoryNames={categoryNames}
            active={active}
            handleTab={(name: string) => setActive(name)}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <div className={classes.appBar}>
          {/* <Search
            onSearch={(data) => setProducts(data as ProductItem[])}
            Data={products}
            allData={allData}
          /> */}
        </div>
        <Grid item xs={12}>
          <ProductItems
            onMoveItem={(item) => onMoveItem(item)}
            products={products}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StockItems;
