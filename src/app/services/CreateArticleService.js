import { randomUUID } from 'crypto';
import ArticlesRepository from '../repositories/sequelize/ArticlesRepository';
import GetKnowledgeAreaService from './GetKnowledgeAreaService';

class CreateArticleService {
  constructor(IArticlesRepository) {
    this.articlesRepository = IArticlesRepository;
  }

  async execute(articleData) {
    const { title, userId, knowledgeAreaId } = articleData;

    const articleExists = await this.articlesRepository.findArticleByTitle(
      title,
    );

    if (articleExists) {
      throw new Error('There is already an article with this title');
    }

    const knowledgeAreaExists = await GetKnowledgeAreaService.execute(
      knowledgeAreaId,
    );

    if (!knowledgeAreaExists) {
      throw new Error('the informed knowledge area does not exist');
    }

    return this.articlesRepository.createArticle({
      id: randomUUID(),
      ...articleData,
      userId,
      statusId: 2,
    });
  }
}

export default new CreateArticleService(ArticlesRepository);
