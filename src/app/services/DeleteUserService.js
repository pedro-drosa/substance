import UsersRepository from '../repositories/sequelize/UsersRepository';

class DeleteUserService {
  async execute(userId) {
    await UsersRepository.deleteUser(userId);
  }
}

export default new DeleteUserService();
