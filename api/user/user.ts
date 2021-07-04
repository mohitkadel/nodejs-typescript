import Utils from '@helper/utils'
import { NextFunction, Response, Request } from 'express';
import { userService, UserService } from '@service/user.service'
import { IUserModel } from '@model/user.model';

class User {
    constructor(private userService: UserService) {}

    getUsers = async (req: Request, res: Response, next: NextFunction) => {
        const users = await this.userService.getUsers();
        return res.status(200).send(users)
    }

    getUser = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const user = await this.userService.getUser(id);
        if(user) {
            return res.status(200).send(user)
        }
        return res.status(404).send()
    }

    createUser = async (req: Request, res: Response, next: NextFunction) => {
        const userModel: IUserModel = req.body;
        const user = await this.userService.createUser(userModel);
        return res.status(201).send(user)
    }
}

export const user = new User(userService)