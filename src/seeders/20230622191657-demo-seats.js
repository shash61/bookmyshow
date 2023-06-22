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

     await queryInterface.changeColumn('Seats','position',Sequelize.STRING,{transaction:t})
      await queryInterface.bulkInsert('Seats', 
      [
        { position: "1a", createdAt: new Date(), updatedAt: new Date() },
        { position: "1a", createdAt: new Date(), updatedAt: new Date() },
        { position: "1a", createdAt: new Date(), updatedAt: new Date() },
        { position: "1a", createdAt: new Date(), updatedAt: new Date() },
        { position: "1a", createdAt: new Date(), updatedAt: new Date() },
        { position: "1b", createdAt: new Date(), updatedAt: new Date() },
        { position: "1b", createdAt: new Date(), updatedAt: new Date() },
        { position: "1b", createdAt: new Date(), updatedAt: new Date() },
        { position: "1b", createdAt: new Date(), updatedAt: new Date() },
        { position: "1b", createdAt: new Date(), updatedAt: new Date() },
        { position: "1c", createdAt: new Date(), updatedAt: new Date() },
        { position: "1c", createdAt: new Date(), updatedAt: new Date() },
        { position: "1c", createdAt: new Date(), updatedAt: new Date() },
        { position: "1c", createdAt: new Date(), updatedAt: new Date() },
        { position: "1c", createdAt: new Date(), updatedAt: new Date() },
        { position: "1d", createdAt: new Date(), updatedAt: new Date() },
        { position: "1d", createdAt: new Date(), updatedAt: new Date() },
        { position: "1d", createdAt: new Date(), updatedAt: new Date() },
        { position: "1d", createdAt: new Date(), updatedAt: new Date() },
        { position: "1d", createdAt: new Date(), updatedAt: new Date() },
        { position: "1e", createdAt: new Date(), updatedAt: new Date() },
        { position: "1e", createdAt: new Date(), updatedAt: new Date() },
        { position: "1e", createdAt: new Date(), updatedAt: new Date() },
        { position: "1e", createdAt: new Date(), updatedAt: new Date() },
        { position: "1e", createdAt: new Date(), updatedAt: new Date() },
        { position: "1f", createdAt: new Date(), updatedAt: new Date() },
        { position: "1f", createdAt: new Date(), updatedAt: new Date() },
        { position: "1f", createdAt: new Date(), updatedAt: new Date() },
        { position: "1f", createdAt: new Date(), updatedAt: new Date() },
        { position: "1f", createdAt: new Date(), updatedAt: new Date() },
        { position: "1g", createdAt: new Date(), updatedAt: new Date() },
        { position: "1g", createdAt: new Date(), updatedAt: new Date() },
        { position: "1g", createdAt: new Date(), updatedAt: new Date() },
        { position: "1g", createdAt: new Date(), updatedAt: new Date() },
        { position: "1g", createdAt: new Date(), updatedAt: new Date() },
        { position: "1h", createdAt: new Date(), updatedAt: new Date() },
        { position: "1h", createdAt: new Date(), updatedAt: new Date() },
        { position: "1h", createdAt: new Date(), updatedAt: new Date() },
        { position: "1h", createdAt: new Date(), updatedAt: new Date() },
        { position: "1h", createdAt: new Date(), updatedAt: new Date() },
        { position: "1i", createdAt: new Date(), updatedAt: new Date() },
        { position: "1i", createdAt: new Date(), updatedAt: new Date() },
        { position: "1i", createdAt: new Date(), updatedAt: new Date() },
        { position: "1i", createdAt: new Date(), updatedAt: new Date() },
        { position: "1i", createdAt: new Date(), updatedAt: new Date() }
      ]
      , {transaction:t}, {});
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
   await queryInterface.sequelize.transaction(async t=>{
    await queryInterface.changeColumn('Seats','position',Sequelize.INTEGER,{transaction:t})
     await queryInterface.bulkDelete('Seats', null, {transaction:t}, {});
    })
  }
};
