import { Router } from 'express';
import userRouter from './users.routes';
import articleRouter from './article.routes';
import authenticateRouter from './authenticate.routes';
import swaggerRouter from './swagger.routes';

const routes = Router();

routes.use('/', swaggerRouter);
routes.use('/sessions', authenticateRouter);
routes.use('/articles', articleRouter);
routes.use('/users', userRouter);

export default routes;
