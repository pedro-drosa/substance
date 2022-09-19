module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('articles', 'authors');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('articles', 'authors', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },
};
