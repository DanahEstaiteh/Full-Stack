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
  onClose: () => void;
  CategoryName: string;
  onSubmit: (newCat: Category) => void;
  Data: Category[];
}

const EditDialog: React.FC<EdittDialogProps> = (props) => {
  const { Data, onSubmit, isOpen, onClose, CategoryName } = props;
  const [nameInput, setNameInput] = useState<string>(CategoryName);

  const handleSubmit = () => {
    const index = Data.findIndex(
      (cat: Category) => cat['categoryName'] === CategoryName
    );
    const newCategory = Data[index];
    newCategory.categoryName = nameInput;
    onSubmit(newCategory);
    onClose();
  };

  const classes = useStyles();
  useEffect(() => {
    setNameInput(CategoryName);
  }, [CategoryName]);
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
          Edit {CategoryName}
        </DialogTitle>
        <DialogContent style={{ overflow: 'hidden' }}>
          <label className={classes.dialogLabel} htmlFor="name">
            Category Name
          </label>
          <input
            className={classes.dialogInput}
            id="name"
            type="text"
            value={nameInput}
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

export default EditDialog;
