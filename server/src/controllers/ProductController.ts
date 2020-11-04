import  product  from '../models/Products';
import { Request, Response } from 'express';
import {Product} from '../types/types';

export const ProductMongooseModel = product;


const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Product

    const product: Product = new ProductMongooseModel({
     
      id: body.id,
      code: body.code,
      name: body.name,
      category: body.category,
      productDescription: body.productDescription,
      tax: body.tax,
      price:body.price,
      img: body.img,
      rawPrice: body.rawPrice,
      count: body.count,
      expirationDate: body.expirationDate,
      color: body.color,
    })

    const newProduct: Product = await product.save()
    const allProducts: Product[] = await ProductMongooseModel.find()

    res
      .status(201)
      .json({ message: "Product added", data: newProduct, allData: allProducts })
  } catch (error) {
    throw error
  }
}
    const getProducts = async (req: Request, res: Response): Promise<void> => {           
      try {
          const products: Product[] = await ProductMongooseModel.find()
          res.status(200).json({ products })
        } catch (error) {
          throw error
        }
  }
  

    const getProductById = async (req: Request, res: Response): Promise<void> => {           
        ProductMongooseModel.findById(req.params.productId, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    const updateProduct = async (req: Request, res: Response): Promise<void> => {
      try {
        const {
          params: { productId },
          body,
        } = req
        const updateProduct: Product | null = await ProductMongooseModel.findByIdAndUpdate(
          { _id: productId },
          body
        )
        const allProducts: Product[] = await ProductMongooseModel.find()
        res.status(200).json({
          message: "Product Updated", data: updateProduct, allData: allProducts 
        })
      } catch (error) {
        throw error
      }
    }
    const deleteProduct = async (req: Request, res: Response): Promise<void> => {
      try {
        const deletedProduct: Product | null = await ProductMongooseModel.findByIdAndRemove(
          req.params.productId
        )
        const allProducts: Product[] = await ProductMongooseModel.find()
        res.status(200).json({
          message: "Product deleted",
          data: deletedProduct,
          allData: allProducts,
        })
      } catch (error) {
        throw error
      }
    }
   const generateFirstProducts = async (req: Request, res: Response) =>  {     
        var data = [
          {
            id: 1,
            code: 'product1',
            name: 'Hot Chocolate',
            category: 'Drinks',
            productDescription: 'hot',
            tax: 12,
            price: 15.5,
            img: '../images/hotChocolate.jpg',
            rawPrice: 12,
            count: 30,
            expirationDate: new Date('2021-01-16'),
            color: ''
          },
          {
            id: 2,
            code: 'product2',
            name: 'Tea',
            category: 'Drinks',
            productDescription: 'hot',
            tax: 2,
            price: 3.5,
            img: '',
            rawPrice: 1.8,
            count: 18,
            expirationDate: new Date('2020-11-16'),
            color: '#aa2e25'
          },
          {
            id: 3,
            code: 'product3',
            name: 'Coffee',
            category: 'Drinks',
            productDescription: 'hot',
            tax: 8,
            price: 40,
            img: '../images/coffee.jpg',
            rawPrice: 32,
            count: 55,
            expirationDate: new Date('2022-03-16'),
            color: 'brown'
          },
          {
            id: 4,
            code: 'product4',
            name: 'Soda',
            category: 'Drinks',
            productDescription: 'cold',
            tax: 6,
            price: 33.6,
            img: '',
            rawPrice: 28,
            count: 5,
            expirationDate: new Date('2020-12-16'),
            color: '#bbdefb'
          },
          {
            id: 5,
            code: 'product5',
            name: 'Milkshake',
            category: 'Drinks',
            productDescription: 'cold',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: 'pink'
          },
          {
            id: 5,
            code: 'product6',
            name: 'Lemonada',
            category: 'Drinks',
            productDescription: 'cold',
            tax: 10,
            price: 40.5,
            img: '../images/Lemonada.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-05'),
            color: ''
          },
          {
            id: 5,
            code: 'product7',
            name: 'Coca',
            category: 'Drinks',
            productDescription: 'cold',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product8',
            name: 'PanCake',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product9',
            name: 'Doughnuts',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product10',
            name: 'CheeseCake',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '.../images/Cheesecake.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product11',
            name: 'Brownies',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#3e2723'
          },
          {
            id: 5,
            code: 'product12',
            name: 'Cinnabon',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '../images/cinnabon.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product13',
            name: 'Cokkie',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 8.3,
            img: '../images/cookie.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product14',
            name: 'Hamburger',
            category: 'Dinner',
            productDescription: 'mmmm!',
            tax: 10,
            price: 40.5,
            img: '../images/hamburger.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product15',
            name: 'Lasagna',
            category: 'Dinners',
            productDescription: 'mmmmm!',
            tax: 10,
            price: 40.5,
            img: '../images/lasagna.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product16',
            name: 'Chinese Chicken',
            category: 'Dinner',
            productDescription: 'mmmm !',
            tax: 10,
            price: 40.5,
            img: '.../images/chineseChicken.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product17',
            name: 'Turkish Pide',
            category: 'Dinner',
            productDescription: 'mmmm!',
            tax: 10,
            price: 40.5,
            img: '../images/turkisPide.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
          },
          {
            id: 5,
            code: 'product18',
            name: 'Steak',
            category: 'Dinners',
            productDescription: 'mmmm =)',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#ef9a9a'
          }
        ];
          
        ProductMongooseModel.collection.insert(data, function (err) { 
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully generate first products data'});
        });
    
    }
    export { getProducts, addProduct, updateProduct, deleteProduct , generateFirstProducts , getProductById}