import { randomUUID } from 'crypto';
import UsersRepository from '../repositories/sequelize/UsersRepository';

class CreateUserService {
  async execute(userData) {
    return UsersRepository.createUser({ id: randomUUID(), ...userData });
  }
}

export default new CreateUserService();
