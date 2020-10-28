import * as mongoose from 'mongoose';
import { UserSchema } from '../models/User';
import { Request, Response } from 'express';

export const UserMongooseModel = mongoose.model('user', UserSchema);

export class UserController { 

    public generateadmin (req: Request, res: Response) {     
        let data = [
            {
            "username":"dana@admin.com",
            "password":"admin"
            }]
          
        UserMongooseModel.collection.insert(data, function (err, docs) { 
            if (err){
                res.send(err);
            }
            res.json({ message: 'added admin'});
        });
    
    }

}