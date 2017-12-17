'use strict';

import Joi from 'joi';
import controllers from '../controllers';
export default [{
  method: 'POST',
  path: '/users',
  config: {
    description: 'Inserts one user into the system',
    handler: controllers.user.create,
    validate: {
      payload: {
        username: Joi.string().email(),
        password: Joi.string().alphanum().min(8).max(30).required(),
      }
    }
  }
},
{
  method: 'GET',
  path: '/users',
  config: {
    auth: false,
    description: 'Gets the List of All Users in the system',
    handler: controllers.user.read
  }
},
{
  method: 'GET',
  path: '/users/{id}',
  config: {
    description: 'Gets the List of one Users in the system',
    handler: controllers.user.readOne
  }
}
];