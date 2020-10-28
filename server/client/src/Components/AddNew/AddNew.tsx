import React, { useEffect, useState } from 'react';
import { categoryStyles } from '../CategoriesList/Styles';
import { Category } from '../../Types';

import NewDialog from '../Dialog/NewDialog';

interface AddNewProps {
  onSubmit: (newCat: Category ) => void;
  lastId: number;
}

const AddNew: React.FC<AddNewProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const { onSubmit, lastId} = props;
  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleOpenDialog = () => {
    setOpen(true);
  };
 

  const classes = categoryStyles();
  return (
    <>
      <button className={classes.headerButton} onClick={handleOpenDialog}>
        Add Category
      </button>
      <NewDialog
       lastId={lastId}
        isOpen={open}
        onSubmit={onSubmit}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default AddNew;
