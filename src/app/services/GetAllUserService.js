import UsersRepository from '../repositories/sequelize/UsersRepository';

class GetAllUserService {
  async execute() {
    return UsersRepository.getAll();
  }
}

export default new GetAllUserService();
