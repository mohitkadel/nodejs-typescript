import { Router } from 'express';
import { auth } from './auth';

const AuthRouter = Router();
AuthRouter.post('/login', auth.login);

export default AuthRouter;