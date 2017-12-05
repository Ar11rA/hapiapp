'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
      after: "username"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'password');
  }
};
