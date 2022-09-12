module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('status', 'id', {
      type: Sequelize.INTEGER,
      autoIncrement: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('status', 'id', {
      type: Sequelize.STRING,
      autoIncrement: false,
    });
  },
};
