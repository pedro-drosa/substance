import GetAllArticlesService from '../services/GetAllArticlesService';

class ArticleController {
  async index(request, response) {
    const articles = await GetAllArticlesService.execute();
    return response.status(200).json(articles);
  }
}

export default new ArticleController();
