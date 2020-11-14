import  user  from '../models/User';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export const userMongooseModel = user;

const loginControl = async (req: Request, res: Response) => {        
    
    const {userName , password} = req.body;
   try{

    const user = await userMongooseModel.findOne({userName : userName});
        if(!user){
            return res
            .status(404)
            .json({ message: "No account with this Username" })
        }
    const isMatch = bcrypt.compareSync(password, user.password);
        if(!isMatch){
           return res
           .status(404)
           .send({
            accessToken: null,
            message: "Invalid Password!"
          });
    }
    const token = jwt.sign({id : user._id},'5:A&:D[h)u{n[]&r');
    console.log(token)
    res.cookie('token', token);
    console.log(res.cookie);
    const currentUser ={
        userName: userName
    }
    res.json({ message: "user login successfully", data: currentUser, allData: [] })
    
   }catch(error){
    console.log(error)
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