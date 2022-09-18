import ArticlesRepository from '../repositories/sequelize/ArticlesRepository';

class GetAllArticlesService {
  constructor(IArticlesRepository) {
    this.articlesRepository = IArticlesRepository;
  }

  async execute() {
    return this.articlesRepository.getAll();
  }
}

export default new GetAllArticlesService(ArticlesRepository);
