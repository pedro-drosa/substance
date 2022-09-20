import { Router } from 'express';
import AdminController from '../controllers/AdminController';
import ensureensureAuthenticated from '../middlewares/ensureAuthenticated';
import ensureAdminRole from '../middlewares/ensureAdminRole';

const adminRouter = Router();

adminRouter.use(ensureensureAuthenticated, ensureAdminRole);
adminRouter.patch('/:id', AdminController.update);

export default adminRouter;
