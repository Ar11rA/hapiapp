'use strict';
module.exports = function(sequelize, DataTypes) {
  const movie = sequelize.define('movie', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return movie;
};