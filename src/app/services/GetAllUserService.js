import UsersRepository from '../repositories/sequelize/UsersRepository';

class GetAllUserService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute() {
    return this.usersRepository.getAll();
  }
}

export default new GetAllUserService(UsersRepository);
