import axios, { AxiosResponse } from 'axios';
import { ApiDataType, Category } from '../Types/index';

const baseUrl: string = 'http://localhost:5000';

export const getCategories = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const categories: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + '/api/categories'
        );
        return categories;
    } catch (error) {
        throw error;
    }
};

export const addNewCategory = async (
    formData: Category
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const category: Omit<Category, '_id'> = {
            id: formData.id,
            categoryName: formData.categoryName,
            createdAt: formData.createdAt
        };
        const newCategory: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + '/api/category',
            category
        );
        return newCategory;
    } catch (error) {
        throw error;
    }
};

export const updaetCategory = async (
    category: Category
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const updateCategory: Omit<Category, '_id'> = {
            categoryName: category.categoryName,
            id: category.id,
            createdAt: category.createdAt
        };

        const updatedCategory: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/api/categories/${category._id}`,
            updateCategory
        );
        return updatedCategory;
    } catch (error) {
        throw error;
    }
};

export const deleteCategory = async (
    id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedCategory: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/api/categories/${id}`
        );
        return deletedCategory;
    } catch (error) {
        throw error;
    }
};
