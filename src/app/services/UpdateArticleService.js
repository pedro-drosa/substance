import ArticlesRepository from '../repositories/sequelize/ArticlesRepository';
import GetUserService from './GetUserService';

class UpdateArticleService {
  constructor(IArticlesRepository) {
    this.articlesRepository = IArticlesRepository;
  }

  async execute(articleId, userId, articleData) {
    if (articleData.statusId) {
      throw new Error('It is not allowed to change the status of the article');
    }

    const ADMIN = 3;
    const userExists = await GetUserService.execute(userId);

    if (!userExists) throw new Error('user does not exists');

    const articleExists = await this.articlesRepository.getArticle(articleId);

    if (!articleExists) throw new Error('article does not exists');

    if (userId === articleId || userExists.role.id !== ADMIN) {
      throw new Error('you do not have permission to delete this article');
    }

    await this.articlesRepository.updateArticle({
      id: articleId,
      ...articleData,
    });

    return { id: articleId, ...articleData };
  }
}

export default new UpdateArticleService(ArticlesRepository);
