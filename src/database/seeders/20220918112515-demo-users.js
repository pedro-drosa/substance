module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: '56486f88-410f-49c0-8b54-77095b6767c9',
        firstName: 'Pedro',
        lastName: 'Mascarenhas',
        email: 'pedromascarenhas@substance.com',
        password:
          '$2a$10$/ylEaoHjkAvZy8hZRuJhfu1XhTqBmQIn09bBLoQft64.hWIMvW3YW',
        roleId: '3',
        createdAt: '2022-09-17 10:33:00',
        updatedAt: '2022-09-17 10:33:00',
      },
      {
        id: 'b22e6392-ae7b-428e-8ae7-356822778d79',
        firstName: 'José',
        lastName: 'Vitor',
        email: 'josevitor@substance.com',
        password:
          '$2a$10$/ylEaoHjkAvZy8hZRuJhfu1XhTqBmQIn09bBLoQft64.hWIMvW3YW',
        roleId: '3',
        createdAt: '2022-09-17 10:33:00',
        updatedAt: '2022-09-17 10:33:00',
      },
      {
        id: '6821d553-7a45-45b8-91e9-82616342d35b',
        firstName: 'Gabriel',
        lastName: 'Kenji',
        email: 'gabrielkenji@substance.com',
        password:
          '$2a$10$/ylEaoHjkAvZy8hZRuJhfu1XhTqBmQIn09bBLoQft64.hWIMvW3YW',
        roleId: '3',
        createdAt: '2022-09-17 10:33:00',
        updatedAt: '2022-09-17 10:33:00',
      },
      {
        id: '8aeaae48-864b-4e27-928b-bd4dce35d244',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        password:
          '$2a$10$/ylEaoHjkAvZy8hZRuJhfu1XhTqBmQIn09bBLoQft64.hWIMvW3YW',
        roleId: '1',
        createdAt: '2022-09-17 10:33:00',
        updatedAt: '2022-09-17 10:33:00',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
