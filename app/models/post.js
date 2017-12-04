'use strict';
module.exports = function(sequelize, DataTypes) {
  const post = sequelize.define('post', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    categories: DataTypes.TEXT,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        post.belongsTo(models.user, {
          onDelete: "CASCADE",
          foreignKey: 'user_id'
        });
      }
    }
  });
  return post;
};