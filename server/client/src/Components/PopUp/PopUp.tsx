import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import React, { Children } from 'react';
import { popupStyles } from './Style';
import ClearIcon from '@material-ui/icons/Clear';
import Controls from '../Controls';

interface PopupPropsType {
  title: string;
  openPopup: boolean;
  setOpenPopup: (isOpen: boolean) => void;
  color: string;
  onClose: () => void;
}

const PopUp: React.FC<PopupPropsType> = (props) => {
  const { color, title, openPopup, setOpenPopup, onClose, children } = props;
  const classes = popupStyles();
  return (
    <Dialog
      open={openPopup}
      onClose={onClose}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle
        className={classes.dialogTitle}
        style={{ backgroundColor: color }}
      >
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <ClearIcon
            onClick={() => {
              setOpenPopup(false);
            }}
          />
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default PopUp;
