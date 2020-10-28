import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Category } from '../../Types/index';
import { useStyles } from './style';

interface EdittDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newCat: Category ) => void;
  lastId: number;
}

const NewDialog: React.FC<EdittDialogProps> = (props) => {
  const { onSubmit, isOpen, onClose ,lastId} = props;
  const [nameInput, setNameInput] = useState<string>('');

  const handleSubmit = () => {
    let newCategory: Category = {
      _id: "",
      id: (lastId + 1).toString(),
      categoryName: nameInput,
      createdAt: new Date()
    };
    
    onSubmit(newCategory);
    onClose();
  };

  const classes = useStyles();

  return (
    <div>
      <Dialog
        className={classes.dialog}
        open={isOpen}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            overflow: 'hidden'
          }
        }}
      >
        <DialogTitle className={classes.dialogHeader} id="form-dialog-title">
          Add Category
        </DialogTitle>
        <DialogContent style={{ overflow: 'hidden' }}>
          <label className={classes.dialogLabel} htmlFor="name">
            Category Name
          </label>
          <input
            className={classes.dialogInput}
            id="name"
            type="text"
            placeholder="Category Name"
            onChange={(e) => setNameInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Button className={classes.dialogButton} onClick={onClose}>
            Cancel
          </Button>
          <Button className={classes.dialogSubmitButton} onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewDialog;
