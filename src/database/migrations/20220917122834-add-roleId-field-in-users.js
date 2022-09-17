module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'roleId', {
      type: Sequelize.INTEGER,
      references: { model: 'roles', key: 'id' },
      after: 'password',
      onUpdate: 'SET NULL',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'roleId');
  },
};
