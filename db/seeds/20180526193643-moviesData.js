'use strict';

const movies = [
  {title: 'Silence of the lambs', description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.', createdAt: new Date(), updatedAt: new Date()},
  {title: 'Pulp Fiction', description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', createdAt: new Date(), updatedAt: new Date()},
  {title: 'Forrest Gump', description: 'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', createdAt: new Date(), updatedAt: new Date()},
  {title: 'The Green Mile ', description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.', createdAt: new Date(), updatedAt: new Date()}
];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movies', movies, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', movies, {});
  }
};
