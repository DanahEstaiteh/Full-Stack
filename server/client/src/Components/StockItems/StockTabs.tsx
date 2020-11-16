import { Button, ListItem } from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { CategoryTitle } from '../../Types';
import List from '@material-ui/core/List/List';
import { stockItemStyles } from './Style';

interface StockTabProps {
    categoryNames: CategoryTitle[];
    activeTabName: string;
    handleTab: (a: string) => void;
}

const StockTabs: React.FC<StockTabProps> = (props) => {
    const { categoryNames, activeTabName, handleTab } = props;
    const classes = stockItemStyles();

    return (
        <div className={classes.appBar}>
            <List className={classes.tabList}>
                {categoryNames.map((name) => {
                    if (categoryNames.indexOf(name) === 0) {
                        return (
                            <ListItem
                                className={classes.categoryTab}
                                key={name.title}
                            >
                                <Button
                                    onClick={() => handleTab(name.title)}
                                    className={`${classes.buttonTab} ${
                                        name.title === activeTabName
                                            ? `${classes.selectedTab}`
                                            : ''
                                    }`}
                                >
                                    <HomeIcon />
                                </Button>
                            </ListItem>
                        );
                    } else {
                        return (
                            <ListItem
                                key={name.title}
                                className={classes.categoryTab}
                            >
                                <Button
                                    onClick={() => handleTab(name.title)}
                                    className={`${classes.buttonTab} ${
                                        name.title === activeTabName
                                            ? `${classes.selectedTab}`
                                            : ''
                                    }`}
                                >
                                    {name.title}
                                </Button>
                            </ListItem>
                        );
                    }
                })}
            </List>
        </div>
    );
};

export default StockTabs;
