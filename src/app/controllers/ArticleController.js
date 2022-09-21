import GetAllArticlesService from '../services/GetAllArticlesService';
import CreateArticleService from '../services/CreateArticleService';
import DeleteArticleService from '../services/DeleteArticleService';
import GetArticleService from '../services/GetArticleService';

class ArticleController {
  async index(request, response) {
    const articles = await GetAllArticlesService.execute();
    return response.status(200).json(articles);
  }

  async get(request, response) {
    const { id } = request.params;
    const article = await GetArticleService.execute(id);
    return response.status(200).json(article);
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

  async destroy(request, response) {
    try {
      const { id: articleId } = request.params;
      const { userId } = request;
      await DeleteArticleService.execute(articleId, userId);
      return response.status(204).json();
    } catch (error) {
      const fail = {
        message: error.message,
      };
      return response.status(500).json(fail);
    }
  }
}

export default new ArticleController();
