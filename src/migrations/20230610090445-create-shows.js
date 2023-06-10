'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      show_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      theater_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: "Theaters",
          key: "id"
        }
      },
      movie_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "Movies",
          key: "id"
        }
      },
      seats_remaining:{
        type: Sequelize.INTEGER,
        defaultValue: 10
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Show');
  }
};