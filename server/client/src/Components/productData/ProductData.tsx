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
import ProductDataList from './ProductDataList';
import { productStyles } from './style';
import { productTitle } from '../../Data/Data';
import {
    getProducts,
    addNewProduct,
    updaetProduct,
    deleteProduct
} from '../../PosAPIS/ProductAPIs';
import { format } from 'date-fns';

const initialValues = {
    _id: '',
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

const ProductData: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const classes = productStyles();

    const searchData = products.filter((x) =>
        Object.values(x)
            .join(' ')
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
    );

    const handleOpenPopup = () => {
        setIsOpen(true);
    };
    const handleClosePopup = () => {
        setIsOpen(false);
    };

    const handleFilter = (fromDate: Date, toDate: Date) => {
        const filteredProducts = products.filter(
            (x) =>
                format(new Date(x.expirationDate), 'dd/MM/yyyy') >=
                    format(new Date(fromDate), 'dd/MM/yyyy') &&
                format(new Date(x.expirationDate), 'dd/MM/yyyy') <=
                    format(new Date(toDate), 'dd/mm/yyyy')
        );
        setProducts(filteredProducts);
    };

    const fetchProducts = (): void => {
        getProducts()
            .then(({ data: { products } }: Product[] | any) => {
                setProducts(products);
            })
            .catch(() => setProducts([]));
    };
    const handleSaveProduct = (formData: Product): void => {
        handleClosePopup();
        setIsLoading(true);
        addNewProduct(formData)
            .then(({ status, data }) => {
                if (status !== 201) {
                    throw new Error('Error! Product not saved');
                }
                setProducts(data.allData as Product[]);
            })
            .catch((err: any) => console.log(err))
            .finally(() => setIsLoading(false));
    };
    const handleUpdateProduct = (product: Product): void => {
        handleClosePopup();
        setIsLoading(true);
        updaetProduct(product)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('Error! Product not updated');
                }
                setProducts(data.allData as Product[]);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    const handleDeleteProduct = (_id: string): void => {
        deleteProduct(_id)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('Error! product not deleted');
                }
                setProducts(data.allData as Product[]);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <ThemeProvider theme={projectTheme}>
                <Grid container className={classes.ProductPage}>
                    <Grid item xs={11}>
                        <FilterProductList
                            onFilter={(fromDate, toDate) =>
                                handleFilter(fromDate, toDate)
                            }
                        />
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
                                onSearch={(searchKey) =>
                                    setSearchKeyword(searchKey)
                                }
                            />
                        </div>
                    </Grid>
                </Grid>
                {products.length !== 0 ? (
                    <>
                        <HeaderList
                            productTitle={productTitle}
                            productData={products}
                            onSort={(data) => setProducts(data)}
                        />

                        <ProductDataList
                            productData={searchData}
                            handleSaveProduct={handleSaveProduct}
                            handleUpdateProduct={handleUpdateProduct}
                            handleDeleteProduct={handleDeleteProduct}
                        />
                    </>
                ) : null}

                <PopUp
                    title="Add Product"
                    color="secondary"
                    openPopup={isOpen}
                    onClose={handleClosePopup}
                    setOpenPopup={setIsOpen}
                >
                    <ProductForm
                        initialValues={initialValues}
                        onCloseForm={handleClosePopup}
                        handleAddProduct={handleSaveProduct}
                        handleUpdateProduct={handleUpdateProduct}
                    />
                </PopUp>
                {isLoading && <CircularProgress />}
            </ThemeProvider>
        </>
    );
};

export default ProductData;
