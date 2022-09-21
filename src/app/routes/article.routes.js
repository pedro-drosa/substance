import { Router } from 'express';
import ArticleController from '../controllers/ArticleController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const articleRouter = Router();

articleRouter.get('/', ArticleController.index);
articleRouter.get('/:id', ArticleController.get);
articleRouter.post('/', ensureAuthenticated, ArticleController.store);
articleRouter.delete('/:id', ensureAuthenticated, ArticleController.destroy);

export default articleRouter;
