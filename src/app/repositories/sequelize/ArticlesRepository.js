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

  async getArticle(articleId) {
    return this.articleModel.findByPk(articleId);
  }

  async findArticleByTitle(title) {
    return this.articleModel.findOne({ where: { title } });
  }

  async deleteArticle(id) {
    return this.articleModel.destroy({ where: { id } });
  }

  async updateArticleStatus(articleId, statusId) {
    return this.articleModel.update({ statusId }, { where: { id: articleId } });
  }
}

export default new ArticleRepository(Article);
