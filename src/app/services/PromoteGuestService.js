import UsersRepository from '../repositories/sequelize/UsersRepository';
import GetRoleService from './GetRoleService';

class PromoteGuestService {
  constructor(IUsersRepository) {
    this.usersRepository = IUsersRepository;
  }

  async execute(userId, roleId) {
    const userExists = await this.usersRepository.getUser(userId);
    if (!userExists) throw new Error('user does not exist');
    const roleExists = await GetRoleService.execute(roleId);
    if (!roleExists) throw new Error('role does not exist');
    return this.usersRepository.updateUserRole(userId, roleId);
  }
}

export default new PromoteGuestService(UsersRepository);
