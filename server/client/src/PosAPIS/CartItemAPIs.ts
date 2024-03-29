import axios, { AxiosResponse } from 'axios';
import { ApiDataType, Item } from '../Types/index';

const baseUrl: string = 'http://localhost:5000';

export const getItems = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const items: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + '/api/cartItems'
        );
        return items;
    } catch (error) {
        throw error;
    }
};

export const addNewItem = async (
    formData: Item
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const item: Omit<Item, '_id'> = {
            id: formData.id,
            cartId: formData.cartId,
            name: formData.name,
            price: formData.price,
            count: formData.count
        };
        const newItem: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + '/api/item',
            item
        );
        return newItem;
    } catch (error) {
        throw error;
    }
};

export const updaetItem = async (
    item: Item
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const updateItem: Pick<Item, 'count'> = {
            count: item.count
        };

        const updatedItem: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/api/items/${item._id}`,
            updateItem
        );

        return updatedItem;
    } catch (error) {
        throw error;
    }
};

export const deleteItem = async (
    id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedItem: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/api/items/${id}`
        );
        return deletedItem;
    } catch (error) {
        throw error;
    }
};
