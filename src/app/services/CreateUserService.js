import { randomUUID } from 'crypto';
import User from '../models/User';

class CreateUserService {
  async execute(userData) {
    return User.create({ id: randomUUID(), ...userData });
  }
}

export default new CreateUserService();
