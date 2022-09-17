import UsersRepository from '../repositories/sequelize/UsersRepository';

class UpdateUserService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute(userData) {
    const { email } = userData;
    const userExists = await this.usersRepository.findUserByEmail(email);

    if (userExists) throw new Error('user email already exists');

    return this.usersRepository.updateUser({ ...userData });
  }
}

export default new UpdateUserService(UsersRepository);
