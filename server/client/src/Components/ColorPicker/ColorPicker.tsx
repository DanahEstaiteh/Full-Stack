import { List, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { colorPickerStyles } from './Style';

interface ColorPickerPropsType {
   
    onChange : (color: string) => void;
}


const ColorPicker:React.FC<ColorPickerPropsType> = (props) => {
    const classes = colorPickerStyles();
    const {onChange } = props;
    return (
       <List className={classes.list}>
        <ListItem style={{backgroundColor: '#34495E'}} onClick={() => onChange('#34495E')}>
               C1
           </ListItem>
           <ListItem style={{backgroundColor: '#1ABC9C'}} onClick={() => onChange('#1ABC9C')}>
               C2
           </ListItem>
           <ListItem style={{backgroundColor: "#2ECC71"}} onClick={() => onChange('#2ECC71')}>
               C3
           </ListItem>
           <ListItem style={{backgroundColor: '#3498DB'}} onClick={() => onChange('#3498DB')}>
               C4
           </ListItem>
           <ListItem style={{backgroundColor: '#9B59B6'}} onClick={() => onChange('#9B59B6')}>
               C5
           </ListItem>
           <ListItem style={{backgroundColor: '#E67E22'}} onClick={() => onChange('#E67E22')}>
               C6
           </ListItem>
           <ListItem style={{backgroundColor: '#E74C3C'}} onClick={() => onChange('#E74C3C')}>
               C7
           </ListItem>
           </List>
    )
}

export default ColorPicker;
