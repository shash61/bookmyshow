'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   await queryInterface.sequelize.transaction(async t=>{
    await queryInterface.sequelize.query('ALTER TABLE "Movies" ALTER COLUMN "language_available" TYPE VARCHAR(255)[] USING "language_available"::VARCHAR(255)[];',{transaction: t})
     await queryInterface.bulkInsert('Movies', [
      {
        name: 'Movie 1',
        age: "UA",
        movie_dimension: '2D',
        language_available: ['English', 'Spanish'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 2',
        age: "A",
        movie_dimension: '3D',
        language_available: ['English', 'French'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 3',
        age: "UA",
        movie_dimension: '2D',
        language_available: ['English', 'German'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 4',
        age: "UA",
        movie_dimension: '2D',
        language_available: ['English', 'Italian'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 5',
        age: "A",
        movie_dimension: '3D',
        language_available: ['English', 'Spanish'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 6',
        age: "UA",
        movie_dimension: '2D',
        language_available: ['English', 'French'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 7',
        age: "A",
        movie_dimension: '2D',
        language_available: ['English', 'German'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 8',
        age: "UA",
        movie_dimension: '3D',
        language_available: ['English', 'Italian'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 9',
        age: "UA",
        movie_dimension: '2D',
        language_available: ['English', 'Spanish'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 10',
        age: "A",
        movie_dimension: '3D',
        language_available: ['English', 'French'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 11',
        age: "UA",
        movie_dimension: '2D',
        language_available: ['English', 'German'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 12',
        age: "UA",
        movie_dimension: '2D',
        language_available: ['English', 'Italian'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 13',
        age: "A",
        movie_dimension: '3D',
        language_available: ['English', 'Spanish'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 14',
        age: "UA",
        movie_dimension: '2D',
        language_available: ['English', 'French'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 15',
        age: "A",
        movie_dimension: '2D',
        language_available: ['English', 'German'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie 16',
        age: "UA",
        movie_dimension: '3D',
        language_available: ['English', 'Italian'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
     {transaction:t},{})
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
     await queryInterface.sequelize.transaction(async t=>{
      await queryInterface.sequelize.query(
        'ALTER TABLE "Movies" ALTER COLUMN "language_available" TYPE VARCHAR(255) USING "language_available"::VARCHAR(255);'
      ,{transaction: t});
      await queryInterface.bulkDelete('Movies',null,{transaction: t},{})
  }
  )
}
}
