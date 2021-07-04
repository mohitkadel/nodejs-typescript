import { IUser } from '@model/user.model'
import { userService, UserService } from './user.service';

export class AuthService {
    constructor(private userService: UserService) {}

    async login(authLogin: IUser) {
        const user = await this.userService.getUserByEmail(authLogin.email);
        if(user && authLogin.password == user.password) {
            return true;
        }
        return false;
    }

}

export const authService = new AuthService(userService);
