'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Employees', [
      {
        firstname: 'John',
        lastname: 'Doe',
        email: 'admin@corp.com',
        password: '123',
        jobtitle: 'admin',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Employees', null, {});
  },
};
