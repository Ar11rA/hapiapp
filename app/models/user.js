'use strict';
export default (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        user.hasMany(models.post, {
          foreignKey: 'user_id'
        })
      }
    }
  });
  return user;
};
