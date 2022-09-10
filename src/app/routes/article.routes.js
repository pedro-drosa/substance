import { Router } from 'express';
import ArticleController from '../controllers/ArticleController';

const articleRouter = Router();

articleRouter.get('/', ArticleController.index);

export default articleRouter;
