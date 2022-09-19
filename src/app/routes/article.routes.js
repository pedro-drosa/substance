import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ArticleController from '../controllers/ArticleController';

const articleRouter = Router();

articleRouter.get('/', ArticleController.index);
articleRouter.post('/', ensureAuthenticated, ArticleController.store);

export default articleRouter;
