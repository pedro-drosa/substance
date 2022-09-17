import { randomUUID } from 'crypto';
import UsersRepository from '../repositories/sequelize/UsersRepository';

class CreateUserService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute(userData) {
    const { email } = userData;
    const userExists = await this.usersRepository.findUserByEmail(email);

    if (userExists) throw new Error('user email already exists');

    return this.usersRepository.createUser({
      id: randomUUID(),
      ...userData,
      roleId: '1',
    });
  }
}

export default new CreateUserService(UsersRepository);
