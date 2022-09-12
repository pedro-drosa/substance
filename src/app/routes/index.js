import { Router } from 'express';
import userRouter from './users.routes';
import articleRouter from './article.routes';

const routes = Router();

routes.use('/articles', articleRouter);
routes.use('/users', userRouter);

export default routes;
