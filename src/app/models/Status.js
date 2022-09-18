import { Model, DataTypes } from 'sequelize';

class Status extends Model {
  static init(connection) {
    super.init(
      {
        type: DataTypes.STRING,
      },
      { sequelize: connection, tableName: 'status', freezeTableName: 'status' },
    );
  }

  static associate(models) {
    this.hasMany(models.Article, { foreignKey: 'statusId' });
  }
}

export default Status;
