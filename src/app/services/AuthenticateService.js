import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import UsersRepository from '../repositories/sequelize/UsersRepository';
import authConfig from '../../config/auth';

class AuthenticateService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute(email, password) {
    const userExists = await this.usersRepository.findUserByEmail(email);

    if (!userExists) throw new Error('no user found');

    const passwordCheck = await bcryptjs.compare(password, userExists.password);

    if (!passwordCheck) throw new Error('invalid password');

    const { id } = userExists;
    const { secret, expiresIn } = authConfig.jwt;

    return {
      token: jwt.sign({ id }, secret, { expiresIn }),
    };
  }
}

export default new AuthenticateService(UsersRepository);
