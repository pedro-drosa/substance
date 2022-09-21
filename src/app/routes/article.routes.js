import { Router } from 'express';
import ArticleController from '../controllers/ArticleController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ensureAdminRole from '../middlewares/ensureAdminRole';

const articleRouter = Router();

articleRouter.get('/', ArticleController.index);
articleRouter.get('/:id', ArticleController.get);
articleRouter.post('/', ensureAuthenticated, ArticleController.store);
articleRouter.use(ensureAuthenticated, ensureAdminRole);
articleRouter.delete('/:id', ArticleController.destroy);

export default articleRouter;
