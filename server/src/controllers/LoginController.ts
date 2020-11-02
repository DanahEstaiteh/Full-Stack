import * as mongoose from 'mongoose';
import  user  from '../models/User';
import { Request, Response } from 'express';
import {User} from '../types/types';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export const userMongooseModel = user;

const loginControl = async (req: Request, res: Response) => {        
    
    const {userName , password} = req.body;
   try{

    const user = await userMongooseModel.findOne({userName : userName});
        if(!user){
            return res
            .status(400)
            .json({ message: "No account with this Username" })
        }
    const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
           return res
           .status(400)
           .json({ message: "Incorrect password" })
    }
    const token = jwt.sign({id : user._id},'5:A&:D[h)u{n[]&r');
    res.json({
        token,
        user: {
            id: user._id,
            userName : user.userName,
        }
    })
   }catch(error){
    throw error
   }
   
}


const generateUser = async (req: Request, res: Response) => {
try{
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash("dana123", salt);

const newUser = new user({
    userName: 'dana',
    password: passwordHash,
  });
  const savedUser = await newUser.save();
  res.json(savedUser);

}catch(err){
 throw err;
}
}

export {loginControl,generateUser} 