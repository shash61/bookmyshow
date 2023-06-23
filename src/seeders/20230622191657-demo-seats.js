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
        { position: "2a", createdAt: new Date(), updatedAt: new Date() },
        { position: "3a", createdAt: new Date(), updatedAt: new Date() },
        { position: "4a", createdAt: new Date(), updatedAt: new Date() },
        { position: "5a", createdAt: new Date(), updatedAt: new Date() },
        { position: "1b", createdAt: new Date(), updatedAt: new Date() },
        { position: "2b", createdAt: new Date(), updatedAt: new Date() },
        { position: "3b", createdAt: new Date(), updatedAt: new Date() },
        { position: "4b", createdAt: new Date(), updatedAt: new Date() },
        { position: "5b", createdAt: new Date(), updatedAt: new Date() },
        { position: "1c", createdAt: new Date(), updatedAt: new Date() },
        { position: "2c", createdAt: new Date(), updatedAt: new Date() },
        { position: "3c", createdAt: new Date(), updatedAt: new Date() },
        { position: "4c", createdAt: new Date(), updatedAt: new Date() },
        { position: "5c", createdAt: new Date(), updatedAt: new Date() },
        { position: "1d", createdAt: new Date(), updatedAt: new Date() },
        { position: "2d", createdAt: new Date(), updatedAt: new Date() },
        { position: "3d", createdAt: new Date(), updatedAt: new Date() },
        { position: "4d", createdAt: new Date(), updatedAt: new Date() },
        { position: "5d", createdAt: new Date(), updatedAt: new Date() },
        { position: "1e", createdAt: new Date(), updatedAt: new Date() },
        { position: "2e", createdAt: new Date(), updatedAt: new Date() },
        { position: "3e", createdAt: new Date(), updatedAt: new Date() },
        { position: "4e", createdAt: new Date(), updatedAt: new Date() },
        { position: "5e", createdAt: new Date(), updatedAt: new Date() },
        { position: "1f", createdAt: new Date(), updatedAt: new Date() },
        { position: "2f", createdAt: new Date(), updatedAt: new Date() },
        { position: "3f", createdAt: new Date(), updatedAt: new Date() },
        { position: "4f", createdAt: new Date(), updatedAt: new Date() },
        { position: "5f", createdAt: new Date(), updatedAt: new Date() },
        { position: "1g", createdAt: new Date(), updatedAt: new Date() },
        { position: "2g", createdAt: new Date(), updatedAt: new Date() },
        { position: "3g", createdAt: new Date(), updatedAt: new Date() },
        { position: "4g", createdAt: new Date(), updatedAt: new Date() },
        { position: "5g", createdAt: new Date(), updatedAt: new Date() },
        { position: "1h", createdAt: new Date(), updatedAt: new Date() },
        { position: "2h", createdAt: new Date(), updatedAt: new Date() },
        { position: "3h", createdAt: new Date(), updatedAt: new Date() },
        { position: "4h", createdAt: new Date(), updatedAt: new Date() },
        { position: "5h", createdAt: new Date(), updatedAt: new Date() },
        { position: "1i", createdAt: new Date(), updatedAt: new Date() },
        { position: "2i", createdAt: new Date(), updatedAt: new Date() },
        { position: "3i", createdAt: new Date(), updatedAt: new Date() },
        { position: "4i", createdAt: new Date(), updatedAt: new Date() },
        { position: "5i", createdAt: new Date(), updatedAt: new Date() }
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
    await queryInterface.sequelize.query('ALTER TABLE "Seats" ALTER COLUMN "position" TYPE VARCHAR(255) USING "position"::VARCHAR(255);',{transaction:t})
     await queryInterface.bulkDelete('Seats', null, {transaction:t}, {});
    })
  }
};
