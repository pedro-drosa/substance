import UsersRepository from '../repositories/sequelize/UsersRepository';

class UpdateUserService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute(userData) {
    return this.usersRepository.updateUser({ ...userData });
  }
}

export default new UpdateUserService(UsersRepository);
