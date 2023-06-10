'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Users',[
      {
        firstName: 'John',
        lastName: 'Doe',
        city: 'New York',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        city: 'London',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'David',
        lastName: 'Johnson',
        city: 'San Francisco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Sarah',
        lastName: 'Williams',
        city: 'Paris',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Michael',
        lastName: 'Brown',
        city: 'Sydney',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Emma',
        lastName: 'Davis',
        city: 'Tokyo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Daniel',
        lastName: 'Taylor',
        city: 'Toronto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Olivia',
        lastName: 'Anderson',
        city: 'Berlin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'William',
        lastName: 'Harris',
        city: 'Madrid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Sophia',
        lastName: 'Clark',
        city: 'Rome',
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};
