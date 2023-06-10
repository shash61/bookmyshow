'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Shows.hasMany(Bookings)
      Bookings.belongsTo(models.Shows)
      models.User.hasMany(Bookings)
      Bookings.belongsTo(models.User)
      models.Seats.hasOne(Bookings)
      Bookings.belongsTo(models.Seats)

      // define association here
    }
  }
  Bookings.init({
  }, {
    sequelize,
    modelName: 'Bookings',
  });
  return Bookings;
};