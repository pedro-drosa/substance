import ArticlesRepository from '../repositories/sequelize/ArticlesRepository';
import GetUserService from './GetUserService';
import GetArticleService from './GetArticleService';

class DeleteArticleService {
  constructor(IArticlesRepository) {
    this.artilclesRepository = IArticlesRepository;
  }

  async execute(articleId, userId) {
    const userExists = await GetUserService.execute(userId);
    const ADMIN = 3;
    if (!userExists) throw new Error('user does not exist');
    const articleExists = await GetArticleService.execute(articleId);
    if (!articleExists) throw new Error('article does not exist');
    if (userId === articleId || userExists.role.id !== ADMIN) {
      throw new Error('you do not have permission to delete this article');
    }
    return this.artilclesRepository.deleteArticle(articleId);
  }
}

export default new DeleteArticleService(ArticlesRepository);
