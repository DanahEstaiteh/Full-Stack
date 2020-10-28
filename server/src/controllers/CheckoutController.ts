import * as mongoose from 'mongoose';
import { CheckoutsSchema } from '../models/Checkouts';
import { Request, Response } from 'express';

export const CheckoutMongooseModel = mongoose.model('checkout', CheckoutsSchema);

export class CheckoutController { 

    public addNewCheckout (req: Request, res: Response) {                
        let newCategorie = new CheckoutMongooseModel(req.body);

       newCategorie.save((err, data) => {
            if (err){
                res.send(err);
            }    
            res.json(data);
        });
    }

    public getCheckouts (req: Request, res: Response) {           
        CheckoutMongooseModel.find({}, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public getCheckoutById (req: Request, res: Response) {           
        CheckoutMongooseModel.findById(req.params.checkoutId, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public updateCheckout (req: Request, res: Response) {           
        CheckoutMongooseModel.findOneAndUpdate({ _id: req.params.checkoutId }, req.body, { new: true }, 
            (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public deleteCheckout (req: Request, res: Response) {    

        CheckoutMongooseModel.findOneAndRemove({ _id: req.params.checkoutId }, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted checkout!'});
        });
    }

    public generateFirstData (req: Request, res: Response) {     
        var data = [
            {
            "total":100,
            "discount":20,
            "paymentAmount":80,
            "prodcuts":[{
                id:"hkjhfdjksafjl",
            quantity:3,
            unitPrice:55 
            },
            {
                id:"fgsfdffdjksafjl",
            quantity:2,
            unitPrice:30 
            }]
            }, {
                "total":75,
                "discount":10,
                "paymentAmount":66,
                "prodcuts":[{
                    id:"htyergl",
                quantity:4,
                unitPrice:68 
                },
                {
                    id:"f8sdkksafjl",
                quantity:5,
                unitPrice:15 
                }]
                }
        ];
          
        CheckoutMongooseModel.collection.insert(data, function (err, docs) { 
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully generate fisrt checkout data '});
        });
    
    }
}