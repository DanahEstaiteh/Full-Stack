import { Button, Grid, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { categoryData } from '../../Data/Data';
import { Product } from '../../Types';
import { getCategoryNames } from '../CategoriesList/CategoryFunctions';
import Controls from '../Controls/index';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { ProductFormStyles } from './Style';
import { projectTheme } from '../../Styles/Style';
import ConfirmDialog from '../Dialog/ConfirmDialog';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ColorPicker from '../ColorPicker/ColorPicker';

interface ProductFormPropsType {
    initialValues: Product;
    onCloseForm: () => void;
    handleUpdateProduct: (product: Product) => void;
    handleAddProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormPropsType> = (props) => {
    const {
        initialValues,
        onCloseForm,
        handleUpdateProduct,
        handleAddProduct
    } = props;
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const classes = ProductFormStyles();

    const validationSchema = yup.object({
        name: yup.string().required('Product Name is Required !'),
        rawPrice: yup
            .number()
            .moreThan(0, 'Raw Price must be larger than 0')
            .required('Raw Price is Required !'),
        price: yup
            .number()
            .moreThan(
                yup.ref('rawPrice'),
                'Price must be larger than Raw Price !'
            )
            .required('Price is Required !'),
        code: yup.string().required('Product code is Required!')
    });

    const productForm = useFormik({
        initialValues: initialValues,
        onSubmit: (values: Product) => {
            if (values.id !== 0) {
                values.expirationDate = selectedDate;
                handleUpdateProduct(values);
            } else {
                values.expirationDate = selectedDate;
                handleAddProduct(values);
            }
        },
        validationSchema: validationSchema
    });
    return (
        <ThemeProvider theme={projectTheme}>
            <form
                onSubmit={productForm.handleSubmit}
                className={classes.root}
                autoComplete="off"
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Controls.Input
                            id="Name"
                            name="name"
                            label="Name"
                            value={productForm.values.name}
                            error={productForm.errors.name}
                            type="text"
                            onChange={productForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input
                            id="Raw Price"
                            name="rawPrice"
                            label="Raw Price"
                            type="text"
                            value={productForm.values.rawPrice}
                            error={productForm.errors.rawPrice}
                            onChange={productForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input
                            id="Price"
                            name="price"
                            label="Price"
                            type="text"
                            value={productForm.values.price}
                            error={productForm.errors.price}
                            onChange={productForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input
                            id="Code"
                            name="code"
                            label="Code"
                            type="text"
                            value={productForm.values.code}
                            error={productForm.errors.code}
                            onChange={productForm.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controls.Input
                            id="Stock Count"
                            name="count"
                            label="Stock Count"
                            type="text"
                            value={productForm.values.count}
                            error={productForm.errors.count}
                            onChange={productForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p>Choose color to Display in Pos</p>
                        <ColorPicker
                            onChange={(color) =>
                                productForm.setFieldValue('color', color)
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button
                                variant="contained"
                                color="secondary"
                                component="span"
                            >
                                Upload
                            </Button>
                        </label>
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Select
                            name="category"
                            label="Category"
                            value={productForm.values.category}
                            error={productForm.errors.category}
                            onChange={productForm.handleChange}
                            options={getCategoryNames(categoryData)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            name="productDescription"
                            className={classes.textArea}
                            aria-label="minimum height"
                            rowsMin={5}
                            placeholder="Product Description"
                            value={productForm.values.productDescription}
                            onChange={productForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.DatePicker
                            name="expirationDate"
                            onChange={(date) => setSelectedDate(date)}
                            minDate={new Date()}
                            value={productForm.values.expirationDate}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <Controls.MyButton
                                text="Submit"
                                color="secondary"
                                variant="contained"
                                size="medium"
                                type="submit"
                            />
                            <Controls.MyButton
                                text="Close"
                                color="default"
                                variant="contained"
                                size="medium"
                                type="button"
                                onClick={() => setIsOpen(true)}
                            />
                        </div>
                    </Grid>
                </Grid>
            </form>
            <ConfirmDialog
                isOpen={isOpen}
                onConfirm={onCloseForm}
                onClose={() => setIsOpen(false)}
            >
                Are you sure you want to close form?
            </ConfirmDialog>
        </ThemeProvider>
    );
};

export default ProductForm;
