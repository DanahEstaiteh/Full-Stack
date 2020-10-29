import { CircularProgress, ThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { projectTheme } from '../../Styles/Style';
import { Product } from '../../Types';
import Controls from '../Controls';
import FilterProductList from '../FilterProductList/FilterProductList';
import PopUp from '../PopUp/PopUp';
import ProductForm from '../ProductForm/ProductForm';
import Search from '../Search/Search';
import HeaderList from './HeaderList';
import ProductDataList from './productDataList';
import { productStyles } from './style';
import { productTitle} from '../../Data/Data';
import {
  getProducts,
  addNewProduct,
  updaetProduct,
  deleteProduct
} from '../../PosAPIS/ProductAPIs';



const ProductData: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openProductEdit, setOpenopenProductEdit] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<Product[]>([]);
  const classes = productStyles();
 
  const handleOpenPopup = () => {
    setOpenopenProductEdit(true);
  };
  const handleClosePopup = () => {
    setOpenopenProductEdit(false);
  };
  const initialValues = {
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

  
  const handleSearch = (seacrhKey : string) => {
    
    if (seacrhKey.length !== 0){
      const newProducts= products.filter((x) =>
      Object.values(x)
        .join(' ')
        .toLowerCase()
        .includes(seacrhKey.toLowerCase()));
        setSearchData(newProducts);
        console.log({newProducts})
    }
       else {
        setSearchData(products);
       }
       console.log({searchData})
}
 

 
  const fetchProducts = (): void => {
    getProducts()
      .then(({ data: { products } }: Product[] | any) => {setProducts(products)})
      .catch((err: Error) => setProducts([]));
  };
  const handleSaveProduct = (formData: Product): void => {
    console.log({formData});
    addNewProduct(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Product not saved');
        }
        setProducts(data.allData as Product[]);
        console.log({products})
      })
      .catch((err: any) => console.log(err));
  };
  const handleUpdateProduct = (product: Product): void => {
    console.log({product})
    updaetProduct(product)
      .then(({ status, data }) => {
        
        if (status !== 200) {
          throw new Error('Error! Product not updated');
        }
        setProducts(data.allData as Product[]);
        
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteProduct = (_id: string): void => {
    deleteProduct(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! product not deleted');
        }
        setProducts(data.allData as Product[]);
        console.log({products})
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setProducts(products);
    setSearchData(products);
  }, [products]);
  useEffect(() => {
    console.log({ loading });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ThemeProvider theme={projectTheme}>
        <Grid container>
          <Grid item xs={11}>
            <FilterProductList Data={products} onFilter={(data) => setProducts(data)} />
          </Grid>
          <Grid item xs={11}>
            <div className={classes.headTwo}>
              <Controls.MyButton
                variant="contained"
                type="button"
                text="new product"
                color="secondary"
                size="medium"
                onClick={() => handleOpenPopup()}
              />
              <Search
                onSearch={(searchKey) => handleSearch(searchKey)}
              />
            </div>
          </Grid>
        </Grid>
        
        <HeaderList
          productTitle={productTitle}
          productData={products}
          onSort={(data) => setProducts(data)}
        />
 
        <ProductDataList productData={searchData}
        handleSaveProduct={handleSaveProduct}
        handleUpdateProduct={handleUpdateProduct}
        handleDeleteProduct={handleDeleteProduct}
        />
        <PopUp
          title="Add Product"
          color="#34495E"
          openPopup={openProductEdit}
          onClose={handleClosePopup}
          setOpenPopup={setOpenopenProductEdit}
        >
            <ProductForm
            initialValues={initialValues}
            onCloseForm={handleClosePopup}
            onLoading={(isLoading) => setLoading(isLoading)}
            handleAddProduct={handleSaveProduct}
            handleUpdateProduct={handleUpdateProduct}
          /> 
        </PopUp>
        {loading && <CircularProgress />}
      </ThemeProvider>
    </>
  );
};

export default ProductData;
