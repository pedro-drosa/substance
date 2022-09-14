import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router();

userRouter.get('/', UserController.index);
userRouter.get('/:id', UserController.get);
userRouter.post('/', UserController.store);
userRouter.delete('/:id', UserController.destroy);

export default userRouter;
