import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Category } from '../../Types/index';
import { useEffect } from 'react';
import { useStyles } from './style';

interface EdittDialogProps {
  isOpen: boolean;
  category: Category;
  onClose: () => void;
  onSubmit: (newCat: Category) => void;
 
}

const EditDialog: React.FC<EdittDialogProps> = (props) => {
  const {  onSubmit, isOpen, onClose, category } = props;
  const [categoryName, setCategoryName] = useState<string>(category.categoryName);

  const newCategory : Category = {
    ...category,
    categoryName: categoryName
  
  }

const handleSumbit = () => {
  onSubmit(newCategory);
  onClose();
}





  const classes = useStyles();
  useEffect(() => {
    setCategoryName(category.categoryName);
  }, [category]);
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
          Edit {category.categoryName}
        </DialogTitle>
        <DialogContent style={{ overflow: 'hidden' }}>
          <label className={classes.dialogLabel} htmlFor="name">
            Category Name
          </label>
          <input
            className={classes.dialogInput}
            id="name"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Button className={classes.dialogButton} onClick={onClose}>
            Cancel
          </Button>
          <Button className={classes.dialogSubmitButton} onClick={handleSumbit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditDialog;
