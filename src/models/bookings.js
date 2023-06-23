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
      models.Shows.hasMany(Bookings,{
        foreignKey: 'show_id'
      })
      Bookings.belongsTo(models.Shows,{
        foreignKey: 'show_id'
      })
      models.User.hasMany(Bookings,{
        foreignKey: 'user_id'
      })
      Bookings.belongsTo(models.User,{
        foreignKey: 'user_id'
      })
      models.Seats.hasOne(Bookings,{
        foreignKey: 'seat_id'
      })
      Bookings.belongsTo(models.Seats,{
        foreignKey: 'seat_id'
      })

      // define association here
    }
  }
  Bookings.init({
  }, {
    sequelize,
    modelName: 'Bookings',
    timestamps: true
  });
  return Bookings;
};