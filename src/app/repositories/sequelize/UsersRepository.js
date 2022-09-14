import User from '../../models/User';

class UsersRepository {
  async createUser(userData) {
    return User.create({ ...userData });
  }

  async getAll() {
    return User.findAll();
  }

  async getUser(userId) {
    return User.findByPk(userId);
  }

  async deleteUser(userId) {
    User.destroy({ where: { id: userId } });
  }

  async updateUser(userData) {
    return User.update({ ...userData }, { where: { id: userData.id } });
  }
}

export default new UsersRepository();
