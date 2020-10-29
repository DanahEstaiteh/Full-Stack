import axios, { AxiosResponse } from 'axios';
import { ApiDataType, Item } from '../Types/index';

const baseUrl: string = 'http://localhost:5000';

export const getItems = async (): Promise<
  AxiosResponse<ApiDataType>
> => {
  try {
    const items: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/api/cartItems'
    );
    console.log(items)
    return items;
  } catch (error) {
    throw new Error(error);
  }
};

export const addNewItem = async (
  formData: Item
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    console.log("1 ->",{formData})
    const item: Omit<Item, '_id' > = {
      id: formData.id,
      cartId: formData.cartId,
      name: formData.name,
      price: formData.price,
      count: formData.count,
    };
    const newItem: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/api/item',
      item
    );
    console.log({newItem});
    return newItem;
  } catch (error) {
    throw new Error(error);
  }
};

export const updaetItem = async (
  item: Item
): Promise<AxiosResponse<ApiDataType>> => {
  try {
   
    const updateItem: Pick<Item, 'count' > = {
      count: item.count,
    };
    
    const updatedItem: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/api/items/${item._id}`,
      updateItem
    );
    
    return updatedItem;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteItem = async (
  id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedItem: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/api/items/${id}`
    );
    console.log({deletedItem})
    return deletedItem;
    
  } catch (error) {
    throw new Error(error);
  }
};
