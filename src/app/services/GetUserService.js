import UsersRepository from '../repositories/sequelize/UsersRepository';

class GetUserService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute(userId) {
    return this.usersRepository.getUser(userId);
  }
}

export default new GetUserService(UsersRepository);
