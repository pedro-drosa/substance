import ArticlesRepository from '../repositories/sequelize/ArticlesRepository';

class DeleteArticleService {
  constructor(IArticlesRepository) {
    this.artilclesRepository = IArticlesRepository;
  }

  async execute(articleId) {
    return this.artilclesRepository.deleteArticle(articleId);
  }
}

export default new DeleteArticleService(ArticlesRepository);
