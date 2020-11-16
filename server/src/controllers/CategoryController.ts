import category from '../models/Category';
import { Request, Response } from 'express';
import { Category } from '../types/types';

export const CategoryMongooseModel = category;

const addCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Category;

    const category: Category = new CategoryMongooseModel({
      id: body.id,
      categoryName: body.categoryName,
      createdAt: body.createdAt
    });

    const newCategory: Category = await category.save();
    const allCategories: Category[] = await CategoryMongooseModel.find();

    res
      .status(201)
      .json({
        message: 'Category added',
        data: newCategory,
        allData: allCategories
      });
  } catch (error) {
    console.log(error);
  }
};
const getCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories: Category[] = await CategoryMongooseModel.find();
    res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
  }
};

const getCategoryById = async (req: Request, res: Response): Promise<void> => {
  CategoryMongooseModel.findById(req.params.categoryId, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

const updateCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { categoryId },
      body
    } = req;
    const updateCategory: Category | null = await CategoryMongooseModel.findByIdAndUpdate(
      { _id: categoryId },
      body
    );
    const allCategories: Category[] = await CategoryMongooseModel.find();
    res.status(200).json({
      message: 'Category updated',
      data: updateCategory,
      allData: allCategories
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCategory: Category | null = await CategoryMongooseModel.findByIdAndRemove(
      req.params.categoryId
    );
    const allCategories: Category[] = await CategoryMongooseModel.find();
    res.status(200).json({
      message: 'Category deleted',
      data: deletedCategory,
      allData: allCategories
    });
  } catch (error) {
    console.log(error);
  }
};
const generateFirstCategories = async (req: Request, res: Response) => {
  var data = [
    {
      id: '1',
      categoryName: 'Drinks',

      createdAt: new Date()
    },
    {
      id: '2',
      categoryName: 'Dinner',

      createdAt: new Date()
    },
    {
      id: '3',
      categoryName: 'Sweet',

      createdAt: new Date()
    }
  ];

  CategoryMongooseModel.collection.insert(data, function (err, docs) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully generate first categories data' });
  });
};
export {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  generateFirstCategories,
  getCategoryById
};
