import UsersRepository from '../repositories/sequelize/UsersRepository';

class GetUserService {
  async execute(userId) {
    return UsersRepository.getUser(userId);
  }
}

export default new GetUserService();
