import CreateArticleService from '../services/CreateArticleService';

class ArticleController {
  index(req, res) {
    res.json(CreateArticleService.execute({ id: 2 }));
  }
}

export default new ArticleController();
