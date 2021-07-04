import { Router } from 'express';
import AuthRouter from '@api/auth';
import UserRouter from '@api/user';
import Middleware from '@api/middleware';

// Export the base-router
const APIRouter = Router();

// Unauthenticated APIs
APIRouter.use('/auth', AuthRouter);


APIRouter.use(Middleware.authenticate)

// Authenticated APIs
APIRouter.use('/users', UserRouter);

export default APIRouter;