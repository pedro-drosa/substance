import { Model, DataTypes } from 'sequelize';
import bcryptjs from 'bcryptjs';

class User extends Model {
  static init(connection) {
    super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      { sequelize: connection, tableName: 'users', freezeTableName: 'users' },
    );

    this.addHook('beforeCreate', async (user) => {
      const currentUser = user || undefined;
      currentUser.password = await bcryptjs.hash(user.password, 10);
      return user;
    });

    this.addHook('beforeUpdate', async (user) => {
      const currentUser = user || undefined;
      currentUser.password = await bcryptjs.hash(user.password, 10);
      return user;
    });
  }

  static associate(models) {
    this.belongsTo(models.Role, { foreignKey: 'roleId', as: 'role' });
    this.hasMany(models.Article, { foreignKey: 'userId' });
  }
}

export default User;
