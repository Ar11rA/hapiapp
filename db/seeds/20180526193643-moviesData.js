'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movies', [
      {title: 'John Doe 1', description: 'Lorem Ipsum 1', createdAt: new Date(), updatedAt: new Date()},
      {title: 'John Doe 2', description: 'Lorem Ipsum 2', createdAt: new Date(), updatedAt: new Date()},
      {title: 'John Doe 3', description: 'Lorem Ipsum 3', createdAt: new Date(), updatedAt: new Date()},
      {title: 'John Doe 4', description: 'Lorem Ipsum 4', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', [
      {title: 'John Doe 1', description: 'Lorem Ipsum 1', createdAt: new Date(), updatedAt: new Date()},
      {title: 'John Doe 2', description: 'Lorem Ipsum 2', createdAt: new Date(), updatedAt: new Date()},
      {title: 'John Doe 3', description: 'Lorem Ipsum 3', createdAt: new Date(), updatedAt: new Date()},
      {title: 'John Doe 4', description: 'Lorem Ipsum 4', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  }
};
