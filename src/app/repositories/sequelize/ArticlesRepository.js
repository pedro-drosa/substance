import Article from '../../models/Article';

class ArticleRepository {
  constructor(ArticleModel) {
    this.articleModel = ArticleModel;
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
}

export default new ArticleRepository(Article);
