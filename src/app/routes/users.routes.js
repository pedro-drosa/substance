import { Router } from 'express';
import UserController from '../controllers/UserController';
import ensureensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();

userRouter.post('/', UserController.store);
userRouter.get('/', ensureensureAuthenticated, UserController.index);
userRouter.get('/:id', ensureensureAuthenticated, UserController.get);
userRouter.put('/:id', UserController.update);
userRouter.delete('/:id', ensureensureAuthenticated, UserController.destroy);

export default userRouter;
