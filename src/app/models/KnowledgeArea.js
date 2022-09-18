import { Model, DataTypes } from 'sequelize';

class KnowledgeArea extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'knowledge-areas',
        freezeTableName: 'knowledge-areas',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Article, { foreignKey: 'knowledgeAreaId' });
  }
}

export default KnowledgeArea;
