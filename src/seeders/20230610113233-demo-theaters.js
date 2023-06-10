'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Theaters',[
      {
        name: 'Theater 1',
        city: 'New York',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 2',
        city: 'London',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 3',
        city: 'San Francisco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 4',
        city: 'Paris',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 5',
        city: 'Sydney',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 6',
        city: 'Tokyo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 7',
        city: 'Toronto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 8',
        city: 'Berlin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 9',
        city: 'Madrid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 10',
        city: 'Rome',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 11',
        city: 'New York',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 12',
        city: 'New York',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 13',
        city: 'London',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 14',
        city: 'London',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 15',
        city: 'San Francisco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 16',
        city: 'San Francisco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 17',
        city: 'Paris',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 18',
        city: 'Paris',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 19',
        city: 'Sydney',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theater 20',
        city: 'Sydney',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
     await queryInterface.bulkDelete('Theaters', null, {});
  }
};
