import  cart  from '../models/Cart';
import { Request, Response } from 'express';
import {Cart} from '../types/types';

export const CartMongooseModel = cart;


const addCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Cart

    const cart: Cart = new CartMongooseModel({
      id: body.id,
     time: body.time,
    })

    const newCart: Cart = await cart.save()
    const allCarts: Cart[] = await CartMongooseModel.find()

    res
      .status(201)
      .json({ message: "Cart added", data: newCart, allData: allCarts })
  } catch (error) {
    throw error
  }
}
const getCarts = async (req: Request, res: Response): Promise<void> => {           
      try {
          const carts: Cart[] = await CartMongooseModel.find()
          res.status(200).json({ carts })
        } catch (error) {
          throw error
        }
  }
  

const getCartById = async (req: Request, res: Response): Promise<void> => {           
        CartMongooseModel.findById(req.params.cartId, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

const updateCart = async (req: Request, res: Response): Promise<void> => {
      try {
        const {
          params: { cartId },
          body,
        } = req
        console.log({body, cartId})
        const updatedCart: Cart | null = await CartMongooseModel.findByIdAndUpdate(
          { _id: cartId },
          body
        )
        console.log({updatedCart})
        const allCarts: Cart[] = await CartMongooseModel.find()
        console.log({allCarts})
        res.status(200).json({
          message: "Cart updated",
          data: updatedCart,
          allData: allCarts,
        })
      } catch (error) {
        throw error
      }
    }
const deleteCart = async (req: Request, res: Response): Promise<void> => {
      try {
        const deletedCart: Cart | null = await CartMongooseModel.findByIdAndRemove(
          req.params.cartId
        )
        const allCarts: Cart[] = await CartMongooseModel.find()
        res.status(200).json({
          message: "Cart deleted",
          data: deletedCart,
          allData: allCarts,
        })
      } catch (error) {
        throw error
      }
    }
   
    export { getCarts, addCart, updateCart, deleteCart , getCartById}