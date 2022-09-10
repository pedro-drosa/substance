import { Router } from 'express';
import articleRouter from './article.routes';

const routes = Router();

routes.use('/articles', articleRouter);

export default routes;
