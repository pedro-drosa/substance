module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('status', [
      {
        id: 1,
        type: 'approvado',
        createdAt: '2022-09-12 00:00:00',
        updatedAt: '2022-09-12 00:00:00',
      },
      {
        id: 2,
        type: 'em revisão',
        createdAt: '2022-09-12 00:00:00',
        updatedAt: '2022-09-12 00:0:00',
      },
      {
        id: 3,
        type: 'reprovado',
        createdAt: '2022-09-12 00:00:00',
        updatedAt: '2022-09-12 00:00:00',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('status', null, {});
  },
};
