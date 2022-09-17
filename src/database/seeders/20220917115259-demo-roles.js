module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('roles', [
      {
        id: 1,
        title: 'guest',
        description: 'new users get this role by default',
        createdAt: '2022-09-12 00:00:00',
        updatedAt: '2022-09-12 00:00:00',
      },
      {
        id: 2,
        title: 'proofreader',
        description: 'can change the status of articles',
        createdAt: '2022-09-12 00:00:00',
        updatedAt: '2022-09-12 00:00:00',
      },
      {
        id: 3,
        title: 'administrator',
        description: 'can perform all system functions',
        createdAt: '2022-09-12 00:00:00',
        updatedAt: '2022-09-12 00:00:00',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
