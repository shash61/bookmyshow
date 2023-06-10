'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Shows', [
      {
        show_time: '2023-06-10 14:00',
        theater_id: 41,
        movie_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        show_time: '2023-06-10 16:30',
        theater_id: 41,
        movie_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        show_time: '2023-06-10 18:45',
        theater_id: 42,
        movie_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        show_time: '2023-06-11 12:00',
        theater_id: 42,
        movie_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        show_time: '2023-06-11 15:15',
        theater_id: 43,
        movie_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        show_time: '2023-06-11 19:30',
        theater_id: 43,
        movie_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        show_time: '2023-06-12 13:30',
        theater_id: 44,
        movie_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        show_time: '2023-06-12 16:00',
        theater_id: 44,
        movie_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        show_time: '2023-06-12 20:15',
        theater_id: 45,
        movie_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        show_time: '2023-06-13 11:45',
        theater_id: 45,
        movie_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    , {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
     await queryInterface.bulkDelete('Shows', null, {});
  }
};
