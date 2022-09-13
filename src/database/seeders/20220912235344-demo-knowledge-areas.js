module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('knowledge-areas', [
      {
        id: 1,
        name: 'ciência da computação',
        description: 'Lorem ipsum dolor sit amet.',
        createdAt: '2022-09-12 00:00:00',
        updatedAt: '2022-09-12 00:00:00',
      },
      {
        id: 2,
        name: 'engenharia de software',
        description: 'consectetur adipiscing elit.',
        createdAt: '2022-09-12 00:00:00',
        updatedAt: '2022-09-12 00:00:00',
      },
      {
        id: 3,
        name: 'análise de dados',
        description: 'Curabitur eget augue commodo.',
        createdAt: '2022-09-12 00:00:00',
        updatedAt: '2022-09-12 00:00:00',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('knowledge-areas', null, {});
  },
};
