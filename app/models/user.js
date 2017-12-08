'use strict';
export default (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        user.hasMany(models.post, {
          foreignKey: 'user_id'
        });
      },
      validate: (decoded, request, callback) => {
        const promise = user.findOne({where: {id: decoded.id}});
        promise.then((data) => {
          if(data === null){
            return callback(null, false);
          } else {
            return callback(null, true);
          }
        });
        promise.catch((e) => {
          return callback(null, false);
        });
      }
    }
  });
  return user;
};
