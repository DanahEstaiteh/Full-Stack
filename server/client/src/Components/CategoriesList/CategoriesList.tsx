import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';

import EditDialog from '../Dialog/EditDialog';

import { Category } from '../../Types';
import { categoryStyles } from './Styles';
import Search from '../Search/Search';
import TablePaginationDemo from '../Pagination/TablePaginationDemo';
import HeaderList from './HeaderList';
import ConfirmDailog from '../Dialog/ConfirmDialog';
import { categoryTitle } from '../../Data/Data';
import {
  getCategories,
  addNewCategory,
  updaetCategory,
  deleteCategory
} from '../../PosAPIS/CategoryAPIs';
import Controls from '../Controls';
import NewDialog from '../Dialog/NewDialog';


interface CategoryListProps {
  categoryData: Category[];
  handleDeleteCategory: (id : string) => void;
  handleUpdateCategory: (category : Category) => void;
}

const CategoryData: React.FC<CategoryListProps> = (props) => {
  const classes = categoryStyles();
  const { categoryData , handleDeleteCategory,handleUpdateCategory} = props;
  const [data, setData] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState<boolean>(false);
  const [categoryForEdit, setCategoryForEdit] = useState<Category>({
    categoryName: '',
    id: '',
    _id: '',
    createdAt: new Date()
  });
  const pages = [5, 10, 15];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pages[page]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const dataAfterPaging = () => {
    return data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  const handleCloseConfirmDialog = () => {
    setIsOpen(false);
  };
  const handleOpenConfirmDialog = (id : string) => {
    setIsOpen(true);
    handleDeleteCategory(id);
  };
  const handleCloseEditDialog = () => {
    setIsOpenEditDialog(false);
  };
  const handleOpenEditDialog = (category: Category) => {
    setCategoryForEdit(category);
    setIsOpenEditDialog(true);
  };

 

  useEffect(() => {
    setData(categoryData);
  }, [categoryData]);

  return (
    <>
      <Grid container spacing={0} className={classes.list}>
        {dataAfterPaging().map((Category: Category) => (
          <Grid container spacing={0} className={classes.row}>
            <Grid item xs={4} className={classes.listItem}>
              <Box key={Category.id}>{Category.categoryName}</Box>
            </Grid>
            <Grid item xs={4} className={classes.listItem}>
              <Box key={Category.id}>
               {Category.createdAt}
              </Box>
            </Grid>
            <Grid item xs={4} className={classes.listItem}>
              <Box key={Category.id}>
                <ClearIcon
                  className={classes.actionIcon}
                  onClick={() => setIsOpen(true)}
                />
                <EditIcon
                  className={classes.actionIcon}
                  onClick={() => handleOpenEditDialog(Category)}
                />
              </Box>
            </Grid>
            <ConfirmDailog
              isOpen={isOpen}
              onClose={handleCloseConfirmDialog}
              onConfirm={() => handleOpenConfirmDialog(Category._id)}
            >
              Are you sure you want to delete this category?
            </ConfirmDailog>
          </Grid>
        ))}

        <EditDialog
          category={categoryForEdit}
          isOpen={isOpenEditDialog}
          onSubmit={(category) => handleUpdateCategory(category)}
          onClose={handleCloseEditDialog}
        />
      </Grid>
      <TablePaginationDemo
        count={data.length}
        data={categoryData}
        onChangePage={(data) => setData(data as Category[])}
        onHandleChangePage={handleChangePage}
        onHandleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        pages={pages}
      />
    </>
  );
};

const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const searchData = categories.filter((x) =>
  Object.values(x)
    .join(' ')
    .toLowerCase()
    .includes(searchKeyword.toLowerCase()))
 
  
const fetchCategories = (): void => {
  getCategories()
    .then(({ data: { categories } }: Category[] | any) => {setCategories(categories)})
    .catch(() => setCategories([]));
};
const handleSaveCategory = (formData: Category): void => {
  handleCloseNewDialog();
  addNewCategory(formData)
    .then(({ status, data }) => {
      if (status !== 201) {
        throw new Error('Error! Category not saved');
      }
      setCategories(data.allData as Category[]);
    })
    .catch((err: any) => console.log(err));
};
const handleUpdateCategory = (category: Category): void => {
  updaetCategory(category)
    .then(({ status, data }) => {
      
      if (status !== 200) {
        throw new Error('Error! Category not updated');
      }
      setCategories(data.allData as Category[]);
      
    })
    .catch((err) => console.log(err));
};

const handleDeleteCategory = (_id: string): void => {
  deleteCategory(_id)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error('Error! Category not deleted');
      }
      setCategories(data.allData as Category[]);
     
    })
    .catch((err) => console.log(err));
};

const handleOpenNewDialog= () => {
  setIsOpen(true);
}

const handleCloseNewDialog= () => {
  setIsOpen(false);
}

useEffect(() => {
  fetchCategories();
}, []);
  const classes = categoryStyles();
  return (
    <Grid  container className={classes.CategoryPage}>
      <Grid item xs={11}>
      <header className={classes.header}>
        <Controls.MyButton 
         variant="outlined"
         text="Add New"
         type="button"
         color="primary"        
         size="medium"
         className={classes.headerButton}
         onClick={handleOpenNewDialog}
        />
        <Search
                onSearch={(searchKey) => setSearchKeyword(searchKey)}
              />
      </header>
      <NewDialog
       lastId={categories.length}
        isOpen={isOpen}
        onSubmit={(category) =>  handleSaveCategory(category)}
        onClose={handleCloseNewDialog}
      />
      </Grid>
      {
        categories.length !== 0 ? 
        <> 
        <HeaderList
        categoryTitle={categoryTitle}
        categoryData={categories}
        onSort={(data) => setCategories(data)}
      />
      <CategoryData categoryData={searchData}
      handleDeleteCategory={handleDeleteCategory}
      handleUpdateCategory={handleUpdateCategory}
      />
        </> : 
        null
      }
    </Grid>
  );
};

export default CategoriesList;
