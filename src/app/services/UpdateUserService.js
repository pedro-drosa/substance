import UsersRepository from '../repositories/sequelize/UsersRepository';

class UpdateUserService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute(userData) {
    const { id, email } = userData;
    const user = await this.usersRepository.getUser(id);

    if (email && email !== user.email) {
      const emailExists = await this.usersRepository.findUserByEmail(email);
      if (emailExists) throw new Error('user email already exists');
    }

    const [, [updatedUser]] = await this.usersRepository.updateUser({
      ...userData,
    });

    const { firstName, lastName, createdAt, updatedAt } = updatedUser;

    return { id, firstName, lastName, email, createdAt, updatedAt };
  }
}

export default new UpdateUserService(UsersRepository);
