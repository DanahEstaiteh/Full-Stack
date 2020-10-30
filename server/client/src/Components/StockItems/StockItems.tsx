import { Divider, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import React, { useEffect, useState } from 'react';
import { CategoryTitle, Item, Product, ProductItem } from '../../Types';

import ProductItems from './ProductItems';
import StockTabs from './StockTabs';
import { stockItemStyles } from './Style';
import Search from '../Search/Search';

interface StockItemsPropsType {
  categoryNames: CategoryTitle[];
  products: Product[];
  onMoveItem: (item: Product) => void;
}

const StockItems: React.FC<StockItemsPropsType> = (props) => {
  const { categoryNames, products, onMoveItem } = props;
  const [active, setActive] = useState<string>('home');
  const [searchData, setSearchData] = useState<Product[]>([]);
  
  const classes = stockItemStyles();
 

  const handleSearch = (seacrhKey : string) => {
    
    if (seacrhKey.length !== 0){
      const newProducts= searchData.filter((x) =>
      Object.values(x)
        .join(' ')
        .toLowerCase()
        .includes(seacrhKey.toLowerCase()));
        setSearchData(newProducts);
        console.log({newProducts})
    }
       else {
        setSearchData(products);
       }
       console.log({searchData})
}

const getProductItem = () => {
  const activeItem = products.filter((product) => product.category === active );
  active === 'home' ? setSearchData(products) : setSearchData(activeItem);
}

useEffect(() => {
 
  setSearchData(products);
}, [products]);

  useEffect(() => {
    
      getProductItem();
   
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
        <Search
                onSearch={(searchKey) => handleSearch(searchKey)}
              />
        </div>
        <Grid item xs={12}>
          <ProductItems
            products={searchData}
            onMoveItem={onMoveItem}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StockItems;
