import User, { IUser, IUserModel } from '@model/user.model';
import { Model } from 'mongoose';

export class UserService {
    constructor(private userModel: Model<IUser>) {

    }

    async getUser(id: string): Promise<IUserModel[]> {
        return this.userModel.findById(id).catch(error => {
            console.log(error)
            return error;
        });
    }

    async getUserByEmail(email: string): Promise<IUserModel> {
        return this.userModel.findOne({ email }).catch(error => {
            console.log(error)
            return error;
        });
    }

    async getUsers(): Promise<IUserModel[]> {
        return this.userModel.find().catch(error => {
            console.log(error)
            return error;
        });
    }

    async createUser(user: IUserModel): Promise<IUserModel> {
        const userModel = new User(user);
        return userModel.save();
    }
}

export const userService = new UserService(User);