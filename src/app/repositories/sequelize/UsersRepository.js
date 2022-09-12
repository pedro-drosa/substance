import User from '../../models/User';

class UsersRepository {
  async createUser(userData) {
    return User.create({ ...userData });
  }
}

export default new UsersRepository();
