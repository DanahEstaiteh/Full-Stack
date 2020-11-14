import axios, { AxiosResponse } from 'axios';
import { ApiDataType, Product } from '../Types/index';

const baseUrl: string = 'http://localhost:5000';

export const getProducts = async (): Promise<
  AxiosResponse<ApiDataType>
> => {
  try {
    const products: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/api/product',
      {
        headers: {
          'Authorization': 'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTAyMTEwODk1MzYyMjEzOGEyMzY4NyIsImlhdCI6MTYwNDkyNzA5MiwiZXhwIjoxNjA1MDEzNDkyfQ.2onFY3oTWPLFeJb_I9Yl930XmbViGcB0ka2b_DuPxDY'
        
        }
      }
    );
    return products;
  } catch (error) {
    throw error
  }
};

export const addNewProduct = async (
  formData: Product
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const product: Omit<Product, '_id' > = {
      id: formData.id,
      code: formData.code,
      name: formData.name,
      category: formData.category,
      productDescription: formData.productDescription,
      tax: formData.tax,
      price: formData.price,
      img: formData.img,
      rawPrice: formData.rawPrice,
      count: formData.count,
      expirationDate: formData.expirationDate,
      color: formData.color
    };
    const newProduct: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/api/products',
      product
    );
    return newProduct;
  } catch (error) {
    throw error
  }
};

export const updaetProduct = async (
  product: Product
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const updateProduct: Omit<Product, '_id' > = {
      code: product.code,
      id: product.id,
      name: product.name,
      category: product.category,
      productDescription: product.productDescription,
      tax: product.tax,
      price: product.price,
      img: product.img,
      rawPrice: product.rawPrice,
      count: product.count,
      expirationDate: product.expirationDate,
      color: product.color
    };
    
    const updatedProduct: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/api/products/${product._id}`,
      updateProduct
     
    );
    return updatedProduct;
  } catch (error) {
    throw error
  }
};

export const deleteProduct = async (
  id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedProduct: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/api/products/${id}`
    );
    return deletedProduct;
  } catch (error) {
    throw error
  }
};
