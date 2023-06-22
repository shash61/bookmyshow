'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Movies.hasMany(Shows,{
        foreignKey:'movie_id'
      })
      Shows.belongsTo(models.Movies,{
        foreignKey: 'movie_id'
      })
      Shows.belongsTo(models.Theater,{
        foreignKey: 'theater_id'
      })
      models.Theater.hasMany(Shows,{
        foreignKey: 'theater_id'
      })
    }
  }
  Shows.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    show_time: {
      allowNull:false,
      type:DataTypes.DATE
    },
    seats_remaining:{
      type: DataTypes.INTEGER,
      defaultValue: 10
    }
  }, {
    sequelize,
    modelName: 'Shows'
  });
  return Shows;
};