import { randomUUID } from 'crypto';
import UsersRepository from '../repositories/sequelize/UsersRepository';

class CreateUserService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute(userData) {
    return this.usersRepository.createUser({ id: randomUUID(), ...userData });
  }
}

export default new CreateUserService(UsersRepository);
