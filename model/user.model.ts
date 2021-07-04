  
import { Document, Model, model, Schema } from "mongoose";

export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export type IUserModel = IUser & Document;

const UserSchema: Schema  = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);

export default User;