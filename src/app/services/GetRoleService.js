import RolesRepository from '../repositories/sequelize/RolesRepository';

class GetRoleService {
  constructor(IRolesRepository) {
    this.rolesRepository = IRolesRepository;
  }

  async execute(roleId) {
    return this.rolesRepository.getRole(roleId);
  }
}

export default new GetRoleService(RolesRepository);
