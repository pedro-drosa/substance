import { Model, DataTypes } from 'sequelize';

class Role extends Model {
  static init(connection) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      { sequelize: connection, tableName: 'roles', freezeTableName: 'roles' },
    );
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'roleId' });
  }
}

export default Role;
