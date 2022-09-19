module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('articles', [
      {
        id: 'd5cdde56-bb49-4009-b184-a9bfa6077c66',
        title: 'Sollicitudin Mollis',
        content:
          'Nam imperdiet efficitur gravit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque sapien, eleifend eget ornare at, congue non erat. In id sapien hendrerit, fringilla risus a, interdum lorem.',
        authors: 'Pedro Mascarenhas; José Vitor; Gabriel Kenji',
        userId: '56486f88-410f-49c0-8b54-77095b6767c9',
        statusId: '2',
        knowledgeAreaId: '1',
        createdAt: '2022-09-19 19:10:00',
        updatedAt: '2022-09-19 19:10:00',
      },
      {
        id: '27774e70-9a32-4299-9cda-5903f66d6d5c',
        title: 'Maecenas at Lobortis',
        content:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vitae mattis ex. Quisque vel semper nibh.',
        authors: 'José Vitor; Gabriel Kenji',
        userId: 'b22e6392-ae7b-428e-8ae7-356822778d79',
        statusId: '2',
        knowledgeAreaId: '2',
        createdAt: '2022-09-19 19:10:00',
        updatedAt: '2022-09-19 19:10:00',
      },
      {
        id: '0b4aba08-d1e9-4dba-9e35-316e0f2a7fd4',
        title: 'Phasellus et Consequat',
        content:
          'Duis at felis feugiat metus sollicitudin mollis eget vitae tellus. Duis egestas non orci quis sollicitudin.',
        authors: 'John Doe',
        userId: '6821d553-7a45-45b8-91e9-82616342d35b',
        statusId: '2',
        knowledgeAreaId: '3',
        createdAt: '2022-09-19 19:10:00',
        updatedAt: '2022-09-19 19:10:00',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('articles', null, {});
  },
};
