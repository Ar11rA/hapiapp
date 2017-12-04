'use strict';

import Joi from 'joi';
import controllers from '../controllers';
export default [{
  method: 'POST',
  path: '/posts',
  config: {
    description: 'Inserts one user into the system',
    handler: controllers.post.create,
    validate: {
      payload: {
        title: Joi.string().required(),
        categories: Joi.string().required(),
        content: Joi.string().required(),
        user_id: Joi.number().required()
      }
    }
  }
},
{
  method: 'GET',
  path: '/posts',
  config: {
    description: 'Gets the List of All Users in the system',
    handler: controllers.post.readAll
  }
},
{
  method: 'GET',
  path: '/posts/{id}',
  config: {
    description: 'Gets the List of All Users in the system',
    handler: controllers.post.readOne
  }
},
{
  method: 'DELETE',
  path: '/posts/{id}',
  config: {
    description: 'Gets the List of All Users in the system',
    handler: controllers.post.deletePost
  }
}
];