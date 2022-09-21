import ArticlesRepository from '../repositories/sequelize/ArticlesRepository';
import GetStatusService from './GetSatusService';

class ChangeArticleStatusService {
  constructor(IArticlesRepository) {
    this.articlesRepository = IArticlesRepository;
  }

  async execute(articleId, statusId) {
    const articleExists = await this.articlesRepository.getArticle(articleId);
    if (!articleExists) throw new Error('article does not exist');
    const statusExists = await GetStatusService.execute(statusId);
    if (!statusExists) throw new Error('status does not exist');
    await this.articlesRepository.updateArticleStatus(articleId, statusId);
    articleExists.statusId = statusId;
    return { articleExists };
  }
}

export default new ChangeArticleStatusService(ArticlesRepository);
