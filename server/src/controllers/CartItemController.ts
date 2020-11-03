import  cartItem  from '../models/CartItem';
import { Request, Response } from 'express';
import {CartItem} from '../types/types';


export const CartItemMongooseModel = cartItem;


const addItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as CartItem

    const item: CartItem = new CartItemMongooseModel({
      id: body.id,
      cartId: body.cartId,
      name: body.name,
      price: body.price,
      count: body.count,
    })

    const newItem: CartItem = await item.save()
    const allItems: CartItem[] = await CartItemMongooseModel.find()

    res
      .status(201)
      .json({ message: "Item added", data: newItem, allData: allItems })
  } catch (error) {
    throw error
  }
}
const getCartItems = async (req: Request, res: Response): Promise<void> => {           
      try {
          const items: CartItem[] = await CartItemMongooseModel.find()
          res.status(200).json({ items })
        } catch (error) {
          throw error
        }
  }
  

    const getItemById = async (req: Request, res: Response): Promise<void> => {           
        CartItemMongooseModel.findById(req.params.itemId, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    const updateItem = async (req: Request, res: Response): Promise<void> => {
      try {
        const {
          params: { itemId },
          body,
        } = req
        console.log({body, itemId})
        const updatedItem: CartItem | null = await CartItemMongooseModel.findByIdAndUpdate(
          { _id: itemId },
          body
        )
        console.log({updatedItem})
        const allItems: CartItem[] = await CartItemMongooseModel.find()
        console.log({allItems})
        res.status(200).json({
          message: "CartItem updated",
          data: updatedItem,
          allData: allItems,
        })
      } catch (error) {
        throw error
      }
    }
    const deleteItem = async (req: Request, res: Response): Promise<void> => {
      try {
        const deletedItem: CartItem | null = await CartItemMongooseModel.findByIdAndRemove(
          req.params.itemId
        )
        const allItems: CartItem[] = await CartItemMongooseModel.find()
        res.status(200).json({
          message: "Item deleted",
          data: deletedItem,
          allData: allItems,
        })
      } catch (error) {
        throw error
      }
    }
   

   
    export { getCartItems, addItem, updateItem, deleteItem , getItemById}