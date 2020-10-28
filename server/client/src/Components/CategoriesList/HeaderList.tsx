import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import SwapVertIcon from '@material-ui/icons/SwapVert';

import { Category, CategoryTitle } from '../../Types';
import { categoryStyles } from './Styles';

interface HeaderListProps {
  categoryTitle: { id: keyof Category; title: string }[];
  onSort: (data: Category[]) => void;
  categoryData: Category[];
}

const HeaderList: React.FC<HeaderListProps> = (props) => {
  const classes = categoryStyles();
  const { categoryTitle, categoryData, onSort } = props;
  const [sort, setSort] = useState<boolean>(false);
  const [data] = useState<Category[]>(categoryData);

  const handleSort = (title: keyof Category) => {
    setSort(!sort);
    categorySort(title);
  };

  const categorySort = (title: keyof Category) => {
    categoryData.sort((a, b) => (a[title] > b[title] ? 1 : -1));
    let sortedData = [...categoryData];
    onSort(sortedData);
  };

  useEffect(() => {}, [sort, data]);

  return (
    <Grid container spacing={0} className={classes.headerList}>
      {categoryTitle.map((category, index) => (
        <Grid item xs={4}>
          <Box key={category.id} className={classes.headerItem}>
            {category.title}
            <SwapVertIcon
              onClick={() => {
                handleSort(category.id);
              }}
            />
          </Box>
        </Grid>
      ))}
      <Grid item xs={4}>
        <Box key="action" className={classes.headerItem}>
          Actions
          <SwapVertIcon />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeaderList;
