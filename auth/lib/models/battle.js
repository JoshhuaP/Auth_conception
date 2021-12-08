'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Battle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Battle.init({
    joueur1: DataTypes.INTEGER,
    joueur2: DataTypes.INTEGER,
    score1: DataTypes.INTEGER,
    score2: DateTypes.INTEGER,
    date: DataTypes.DATE
    duree:DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Battle',
  } {
	
  });
  return Battle;
};
