import ArticlesRepository from '../repositories/sequelize/ArticlesRepository';

class GetArticleService {
  constructor(IArticlesRepository) {
    this.articlesRepository = IArticlesRepository;
  }

  async execute(articleId) {
    return this.articlesRepository.getArticle(articleId);
  }
}

export default new GetArticleService(ArticlesRepository);
