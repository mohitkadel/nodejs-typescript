import { Router } from 'express';
import { user } from './user';
import UserValidators from './validators';

const UserRouter = Router();

UserRouter.get('/', user.getUsers);
UserRouter.get('/:id', user.getUser);
UserRouter.post('/', UserValidators.validateCreateUser, user.createUser);

export default UserRouter;