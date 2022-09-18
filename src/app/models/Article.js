import { Model, DataTypes } from 'sequelize';

class Article extends Model {
  static init(connection) {
    super.init(
      {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        authors: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'articles',
        freezeTableName: 'articles',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'publisher' });
    this.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });
    this.belongsTo(models.KnowledgeArea, {
      foreignKey: 'knowledgeAreaId',
      as: 'knowledgeArea',
    });
  }
}

export default Article;
