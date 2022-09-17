import { Router } from 'express';
import AuthenticateController from '../controllers/AuthenticateController';

const authenticateRouter = Router();

authenticateRouter.post('/', AuthenticateController.store);

export default authenticateRouter;
