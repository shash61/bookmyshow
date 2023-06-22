'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      show_id:{
        type: Sequelize.INTEGER,
        references:{
          model: "Shows",
          key: "id"
        }
      },
      user_id:{
        type: Sequelize.INTEGER,
        references:{
          model: "Users",
          key: "id"
        }
      },
      seat_id:{
        type: Sequelize.INTEGER,
        references:{
          model: "Seats",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }, times);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};