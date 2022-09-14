import UsersRepository from '../repositories/sequelize/UsersRepository';

class DeleteUserService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute(userId) {
    await this.usersRepository.deleteUser(userId);
  }
}

export default new DeleteUserService(UsersRepository);
