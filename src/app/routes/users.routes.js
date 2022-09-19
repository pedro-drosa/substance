import { Router } from 'express';
import UserController from '../controllers/UserController';
import ensureensureAuthenticated from '../middlewares/ensureAuthenticated';
import ensureAdminRole from '../middlewares/ensureAdminRole';

const userRouter = Router();

userRouter.post(
  '/',
  ensureensureAuthenticated,
  ensureAdminRole,
  UserController.store,
);
userRouter.get('/', ensureensureAuthenticated, UserController.index);
userRouter.get('/:id', ensureensureAuthenticated, UserController.get);
userRouter.put('/:id', UserController.update);
userRouter.delete('/:id', ensureensureAuthenticated, UserController.destroy);

export default userRouter;
