import UsersRepository from '../repositories/sequelize/UsersRepository';

class UpdateUserService {
  async execute(userData) {
    return UsersRepository.updateUser({ ...userData });
  }
}

export default new UpdateUserService();
