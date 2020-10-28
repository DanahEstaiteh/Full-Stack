import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import { format } from 'date-fns';

import EditDialog from '../Dialog/EditDialog';

import { Category } from '../../Types';
import { categoryStyles } from './Styles';
import Search from '../Search/Search';
import TablePaginationDemo from '../Pagination/TablePaginationDemo';
import AddNew from '../AddNew/AddNew';
import HeaderList from './HeaderList';
import ConfirmDailog from '../Dialog/ConfirmDialog';
import { categoryTitle } from '../../Data/Data';
import {
  getCategories,
  addNewCategory,
  updaetCategory,
  deleteCategory
} from '../../PosAPIS/CategoryAPIs';


interface CategoryListProps {
  categoryData: Category[];
  handleDeleteCategory: (id : string) => void;
  handleUpdateCategory: (category : Category) => void;
}

const CategoryData: React.FC<CategoryListProps> = (props) => {
  const classes = categoryStyles();
  const { categoryData , handleDeleteCategory,handleUpdateCategory} = props;
  const [data, setData] = useState<Category[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [itemId, setItemId] = useState<string>('');
  const [itemName, setItemName] = useState<string>('');
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
    setOpen(false);
  };
  const handleOpenConfirmDialog = (id : string) => {
    setOpen(true);
    handleDeleteCategory(id);
  };
  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };
  const handleOpenEditDialog = (category: Category) => {
    setItemName(category.categoryName);
    setOpenEditDialog(true);
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
                  onClick={() => setOpen(true)}
                />
                <EditIcon
                  className={classes.actionIcon}
                  onClick={() => handleOpenEditDialog(Category)}
                />
              </Box>
            </Grid>
            <ConfirmDailog
              isOpen={open}
              onClose={handleCloseConfirmDialog}
              onConfirm={() => handleOpenConfirmDialog(Category._id)}
            >
              Are you sure you want to delete this category?
            </ConfirmDailog>
          </Grid>
        ))}

        <EditDialog
          Data={data}
          CategoryName={itemName}
          isOpen={openEditDialog}
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
  const [searchData, setSearchData] = useState<Category[]>([]);

  const handleSearch = (seacrhKey : string) => {
    
    if (seacrhKey.length !== 0){
      const newCategories= categories.filter((x) =>
      Object.values(x)
        .join(' ')
        .toLowerCase()
        .includes(seacrhKey.toLowerCase()));
        setSearchData(newCategories);
        console.log({newCategories})
    }
       else {
        setSearchData(categories);
       }
       console.log({searchData})
}
const fetchCategories = (): void => {
  getCategories()
    .then(({ data: { categories } }: Category[] | any) => {setCategories(categories)})
    .catch((err: Error) => setCategories([]));
};
const handleSaveCategory = (formData: Category): void => {
  console.log({formData});
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
  console.log({category})
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
useEffect(() => {
  setCategories(categories);
  setSearchData(categories);
}, [categories]);
useEffect(() => {
  fetchCategories();
}, []);
  const classes = categoryStyles();
  return (
    <>
      <header className={classes.header}>
        <AddNew onSubmit={handleSaveCategory} lastId={categories.length} />
        <Search
                onSearch={(searchKey) => handleSearch(searchKey)}
              />
      </header>
      <HeaderList
        categoryTitle={categoryTitle}
        categoryData={categories}
        onSort={(data) => setCategories(data)}
      />
      <CategoryData categoryData={searchData}
      handleDeleteCategory={handleDeleteCategory}
      handleUpdateCategory={handleUpdateCategory}
      />
    </>
  );
};

export default CategoriesList;
