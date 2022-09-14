import User from '../../models/User';

class UsersRepository {
  constructor(UserModel) {
    this.userModel = UserModel;
  }

  async createUser(userData) {
    return this.userModel.create({ ...userData });
  }

  async getAll() {
    return this.userModel.findAll();
  }

  async getUser(userId) {
    return this.userModel.findByPk(userId);
  }

  async deleteUser(userId) {
    this.userModel.destroy({ where: { id: userId } });
  }

  async updateUser(userData) {
    return this.userModel.update(
      { ...userData },
      { where: { id: userData.id } },
    );
  }
}

export default new UsersRepository(User);
