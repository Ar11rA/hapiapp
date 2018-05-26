'use strict';

import controllers from '../controllers';
export default [
  {
    method: 'GET',
    path: '/movies/random',
    config: {
      description: 'Gets the List of All Users in the system',
      handler: controllers.movies.getRandom
    }
  }
];