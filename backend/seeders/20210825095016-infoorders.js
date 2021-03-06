'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Infoorders', [
      {
        employeesid: 2,
        ordersid: 1,
        quantitycomplete: 10,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 4,
        ordersid: 1,
        quantitycomplete: 10,
        quantitydefect: 1,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 5,
        ordersid: 1,
        quantitycomplete: 10,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 2,
        ordersid: 2,
        quantitycomplete: 11,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 4,
        ordersid: 2,
        quantitycomplete: 11,
        quantitydefect: 1,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 5,
        ordersid: 2,
        quantitycomplete: 11,
        quantitydefect: 1,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 6,
        ordersid: 3,
        quantitycomplete: 10,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 7,
        ordersid: 3,
        quantitycomplete: 10,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 8,
        ordersid: 3,
        quantitycomplete: 6,
        quantitydefect: 1,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 9,
        ordersid: 3,
        quantitycomplete: 4,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 2,
        ordersid: 4,
        quantitycomplete: 7,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 4,
        ordersid: 4,
        quantitycomplete: 7,
        quantitydefect: 1,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 2,
        ordersid: 5,
        quantitycomplete: 4,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 4,
        ordersid: 5,
        quantitycomplete: 4,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 4,
        ordersid: 6,
        quantitycomplete: 2,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 5,
        ordersid: 6,
        quantitycomplete: 2,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 9,
        ordersid: 7,
        quantitycomplete: 1,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 6,
        ordersid: 8,
        quantitycomplete: 1,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 7,
        ordersid: 8,
        quantitycomplete: 1,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 8,
        ordersid: 8,
        quantitycomplete: 1,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 9,
        ordersid: 9,
        quantitycomplete: 2,
        quantitydefect: 1,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 8,
        ordersid: 9,
        quantitycomplete: 1,
        quantitydefect: 0,
        status: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 2,
        ordersid: 10,
        quantitycomplete: 1,
        quantitydefect: 0,
        status: 'Open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeesid: 6,
        ordersid: 10,
        quantitycomplete: 2,
        quantitydefect: 0,
        status: 'Open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Infoorders', null, {});
  },
};
