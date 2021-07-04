import Utils from '@helper/utils'
import { NextFunction, Response, Request } from 'express';
import { authService, AuthService } from '@service/auth.service'
import { IUser } from '@model/user.model';

class Auth {
    constructor(private readonly authService: AuthService) {}

    login = async (req: Request, res: Response, next: NextFunction) => {
        const authLogin: IUser = req.body;
        const login = await this.authService.login(authLogin)
        if(login) {
            return res.status(200).send({success: true})
        }

        return res.status(422).send({error: "Invalid Email or Password!"});
    }
}

export const auth = new Auth(authService)