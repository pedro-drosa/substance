module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('articles', 'authors', {
      type: Sequelize.STRING,
      allowNull: false,
      after: 'content',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('articles', 'authors');
  },
};
