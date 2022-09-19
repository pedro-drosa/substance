import GetAllArticlesService from '../services/GetAllArticlesService';
import CreateArticleService from '../services/CreateArticleService';

class ArticleController {
  async index(request, response) {
    const articles = await GetAllArticlesService.execute();
    return response.status(200).json(articles);
  }

  async store(request, response) {
    try {
      const { title, content, authors, knowledgeAreaId } = request.body;
      const { userId } = request;
      const article = await CreateArticleService.execute({
        title,
        content,
        authors,
        userId,
        knowledgeAreaId,
      });
      return response.status(201).json(article);
    } catch (error) {
      const fail = {
        message: error.message,
      };
      return response.status(500).json(fail);
    }
  }
}

export default new ArticleController();
