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
}

export default new UsersRepository();
