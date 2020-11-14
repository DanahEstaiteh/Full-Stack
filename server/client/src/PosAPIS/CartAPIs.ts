import axios, { AxiosResponse } from 'axios';
import { ApiDataType, Cart } from '../Types/index';

const baseUrl: string = 'http://localhost:5000';

export const getCarts = async (): Promise<
  AxiosResponse<ApiDataType>
> => {
  try {
    const carts: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/api/carts'
    );
    return carts;
  } catch (error) {
    throw error
  }
};

export const addNewCart = async (
  formData: Cart
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const cart: Omit<Cart, '_id' > = {
      id: formData.id,
      time: formData.time,
    };
    const newCart: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/api/cart',
      cart
    );
    return newCart;
  } catch (error) {
    throw error
  }
};


export const deleteCart = async (
  id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedCart: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/api/carts/${id}`
    );
    return deletedCart;
  } catch (error) {
    throw error
  }
};
