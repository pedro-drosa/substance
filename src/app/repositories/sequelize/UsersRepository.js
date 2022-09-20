import User from '../../models/User';

class UsersRepository {
  constructor(UserModel) {
    this.userModel = UserModel;
  }

  async createUser(userData) {
    return this.userModel.create({ ...userData });
  }

  async getAll() {
    return this.userModel.findAll({
      attributes: { exclude: ['password', 'roleId'] },
      include: {
        association: 'role',
        attributes: ['id', 'title'],
      },
    });
  }

  async getUser(userId) {
    return this.userModel.findByPk(userId, {
      attributes: { exclude: ['password', 'roleId'] },
      include: {
        association: 'role',
        attributes: ['id', 'title'],
      },
    });
  }

  async deleteUser(userId) {
    this.userModel.destroy({ where: { id: userId } });
  }

  async findUserByEmail(email) {
    return this.userModel.findOne({ where: { email } });
  }

  async updateUser(userData) {
    return User.update(
      { ...userData },
      { where: { id: userData.id }, individualHooks: true },
    );
  }

  async updateUserRole(userId, roleId) {
    return User.update({ roleId }, { where: { id: userId } });
  }
}

export default new UsersRepository(User);
