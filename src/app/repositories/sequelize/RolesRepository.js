import Role from '../../models/Role';

class RolesRepository {
  constructor(RoleModel) {
    this.roleModel = RoleModel;
  }

  async getRole(roleId) {
    return this.roleModel.findByPk(roleId);
  }
}

export default new RolesRepository(Role);
