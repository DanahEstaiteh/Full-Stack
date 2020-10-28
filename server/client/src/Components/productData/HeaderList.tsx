import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import SwapVertIcon from '@material-ui/icons/SwapVert';

import { Product } from '../../Types';
import { productStyles } from './style';


interface HeaderListProps {
  productTitle: { id: keyof Product; label: string }[];
  onSort: (data: Product[]) => void;
  productData: Product[];
}

const HeaderList: React.FC<HeaderListProps> = (props) => {
  const classes = productStyles();
  const { productTitle, productData, onSort } = props;
  const [sort, setSort] = useState<boolean>(false);
  const [data, setData] = useState<Product[]>(productData);

  const handleSort = (title: keyof Product) => {
    setSort(!sort);
    productSort(title);
  };

  const productSort = (title: keyof Product) => {
    productData.sort((a, b) => (a[title] > b[title] ? 1 : -1));
    let sortedData = [...productData];
    onSort(sortedData);
  };

  useEffect(() => {}, [sort, data]);

  return (
    <Grid container spacing={0} className={classes.headerList}>
      {productTitle.map((title) => {
        if (title.label === 'Tax(%)' || title.label === 'Price') {
          return (
            <Grid item xs={1}>
              <Box key={title.label} className={classes.headerItem}>
                {title.label}
                <SwapVertIcon
                  onClick={() => {
                    handleSort(title.id);
                  }}
                />
              </Box>
            </Grid>
          );
        } else {
          return (
            <Grid item xs={2}>
              <Box key={title.label} className={classes.headerItem}>
                {title.label}
                <SwapVertIcon
                  onClick={() => {
                    handleSort(title.id);
                  }}
                />
              </Box>
            </Grid>
          );
        }
      })}
      <Grid item xs={2}>
        <Box key="action" className={classes.headerItem}>
          Actions
          <SwapVertIcon />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeaderList;
