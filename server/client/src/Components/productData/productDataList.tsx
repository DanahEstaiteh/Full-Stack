import { Grid, ThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import React, { useEffect, useState } from 'react';
import { Product } from '../../Types/index';
import DescriptionIcon from '@material-ui/icons/Description';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import { productStyles } from './style';
import TablePaginationDemo from '../Pagination/TablePaginationDemo';
import ProductDetails from '../ProductDetails/ProductDetails';
import PopUp from '../PopUp/PopUp';
import ProductForm from '../ProductForm/ProductForm';
import { projectTheme } from '../../Styles/Style';
import ConfirmDailog from '../Dialog/ConfirmDialog';


interface ProductDataListProps {
  productData: Product[];
  handleUpdateProduct: (product: Product) => void;
  handleSaveProduct: (product: Product) => void;
  handleDeleteProduct: (id : string) => void;
}

export const initialProductValues = {
  _id: "",
  id: 0,
  code: '',
  name: '',
  category: '',
  productDescription: '',
  tax: 0,
  price: 0,
  img: '',
  rawPrice: 0,
  count: 0,
  expirationDate: new Date(),
  color: ''
};

const pages = [5, 10, 15];

const ProductDataList: React.FC<ProductDataListProps> = (props) => {
  const { productData , handleUpdateProduct , handleSaveProduct , handleDeleteProduct} = props;

  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(pages[page]);
  const [isOpenProductEditForm, setIsOpenProductEditForm] = useState<boolean>(false);
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState<boolean>(false);
  const [isOpenProductDetails, setIsOpenopenProductDetails] = useState<boolean>(
    false
  );
  const [productForEdit, setProductForEdit] = useState<Product>(
    initialProductValues
  );
 
  const classes = productStyles();
  const handleOpenConfirmDialog = (id: string) => {
    setIsOpenConfirmDialog(true);
    setProductId(id);
  };
  const handleCloseConfirmDialog = () => {
    setIsOpenConfirmDialog(false);
  };
  const handleCloseProductDetails = () => {
    setIsOpenopenProductDetails(false);
  };
  const handleOpenProductDetails = (id: string) => {
    setProductId(id);
    setIsOpenopenProductDetails(true);
  };
  const handleOpenEditProduct = (product: Product) => {
    setProductForEdit(product);
    setIsOpenProductEditForm(true);
  };
  const handleCloseEditProduct = () => {
    setIsOpenProductEditForm(false);
  };
  

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
    return productData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

 
//
  useEffect(() => {
    setProducts(productData);
  }, [productData]);


  return (
    <>
      <ThemeProvider theme={projectTheme}>
        <Grid container spacing={0} className={classes.list}>
          {dataAfterPaging()?.map((product: Product) => (
            <Grid container spacing={0} className={classes.row}>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>{product.code}</Box>
              </Grid>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>{product.name}</Box>
              </Grid>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>{product.category}</Box>
              </Grid>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>{product.productDescription}</Box>
              </Grid>
              <Grid item xs={1} className={classes.listItem}>
                <Box key={product.code}>{product.tax}</Box>
              </Grid>
              <Grid item xs={1} className={classes.listItem}>
                <Box key={product.code}>{product.price}</Box>
              </Grid>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>
                  <ClearIcon
                    className={classes.actionIcon}
                    onClick={() => handleOpenConfirmDialog(product._id)}
                  />
                  <DescriptionIcon
                    className={classes.actionIcon}
                    onClick={() => handleOpenProductDetails(product.code)}
                  />
                  <EditIcon
                    className={classes.actionIcon}
                    onClick={() => handleOpenEditProduct(product)}
                  />
                </Box>
              </Grid>
            </Grid>
          ))}
          <ConfirmDailog
            isOpen={isOpenConfirmDialog}
            onClose={handleCloseConfirmDialog}
            onConfirm={() => handleDeleteProduct(productId)}
          >
            Are you sure you want to delete this product?
          </ConfirmDailog>
          <ProductDetails
            isOpen={isOpenProductDetails}
            onClose={handleCloseProductDetails}
            Data={products}
            productId={productId}
          />
        </Grid>
         <TablePaginationDemo
          count={products.length}
          data={products}
          onChangePage={(data) => setProducts(data as Product[])}
          onHandleChangePage={handleChangePage}
          onHandleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          pages={pages}
        /> 
        <PopUp
          title="Edit Product"
          color="#34495E"
          openPopup={isOpenProductEditForm}
          setOpenPopup={setIsOpenProductEditForm}
          onClose={() => handleCloseEditProduct}
        >
           <ProductForm
            initialValues={productForEdit}
            onCloseForm={() => setIsOpenProductEditForm(false)}
            handleAddProduct={handleSaveProduct}
            handleUpdateProduct={handleUpdateProduct}
          /> 
            
           
         
        </PopUp>
      </ThemeProvider>
    </>
  );
};

export default ProductDataList;
