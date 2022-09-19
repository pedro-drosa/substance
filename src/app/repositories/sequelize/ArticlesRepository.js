import Article from '../../models/Article';

class ArticleRepository {
  constructor(ArticleModel) {
    this.articleModel = ArticleModel;
  }

  async createArticle(articleData) {
    return this.articleModel.create({ ...articleData });
  }

  async getAll() {
    return this.articleModel.findAll({
      attributes: { exclude: ['userId', 'statusId'] },
      include: [
        {
          association: 'publisher',
          attributes: ['id', 'email'],
        },
        {
          association: 'status',
          attributes: ['type'],
        },
        {
          association: 'knowledgeArea',
          attributes: ['name'],
        },
      ],
    });
  }

  async findArticleByTitle(title) {
    return this.articleModel.findOne({ where: { title } });
  }
}

export default new ArticleRepository(Article);
