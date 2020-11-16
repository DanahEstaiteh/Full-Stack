import { Divider, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import React, { useEffect, useState } from 'react';
import { CategoryTitle, Product } from '../../Types';

import ProductItems from './ProductItems';
import StockTabs from './StockTabs';
import { stockItemStyles } from './Style';
import Search from '../Search/Search';

interface StockItemsPropsType {
    categoryNames: CategoryTitle[];
    products: Product[];
    activeTabName: string;
    onMoveItem: (item: Product) => void;
    onActiveTabNameCahnge: (tabName: string) => void;
}

const StockItems: React.FC<StockItemsPropsType> = (props) => {
    const {
        categoryNames,
        products,
        activeTabName,
        onActiveTabNameCahnge,
        onMoveItem
    } = props;
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const classes = stockItemStyles();

    const searchData = products.filter((x) =>
        Object.values(x)
            .join(' ')
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
    );

    return (
        <Paper className={classes.root}>
            <Grid
                container
                item
                xs={12}
                spacing={2}
                className={classes.container}
            >
                <Grid item xs={12}>
                    <StockTabs
                        categoryNames={categoryNames}
                        activeTabName={activeTabName}
                        handleTab={(name: string) =>
                            onActiveTabNameCahnge(name)
                        }
                    />
                    <Grid item xs={12}>
                        <Divider className={classes.divider} />
                    </Grid>
                    <div className={classes.appBar}>
                        <Search
                            onSearch={(searchKey) =>
                                setSearchKeyword(searchKey)
                            }
                        />
                    </div>
                </Grid>
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
