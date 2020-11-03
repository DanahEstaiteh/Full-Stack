import React from "react";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Collapse } from '@material-ui/core';
import useStyles from './styles';

const LanguageList: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const classes = useStyles();
  
    const languages = ['arabic', 'Hindi', 'Chinese'];
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
      <List>
        <ListItem>
          <LanguageIcon />
          {isOpen ? (
            <ArrowDropUpIcon onClick={handleClick} />
          ) : (
            <ArrowDropDownIcon onClick={handleClick} />
          )}
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={classes.nestedList}>
            {languages.map((lang) => (
              <ListItem button key={lang} className={classes.nested}>
                {lang}
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    );
  };


  export default LanguageList;