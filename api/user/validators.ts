import { IUserModel } from "@model/user.model";
import { userService } from "@service/user.service";
import { NextFunction, Request, Response } from "express";

export default class UserValidators {
    constructor() {}

    static async validateCreateUser(req: Request, res: Response, next: NextFunction) {
        const user: IUserModel = req.body;
        if(user.email && user.password) {
            const exists = await userService.getUserByEmail(user.email)
            if(!exists) {
                next();
            }
        }
        return res.status(422).send({error: 'Invalid request!'})
    }
    
}
