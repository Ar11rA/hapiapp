'use strict';

import Joi from 'joi';
import controllers from '../controllers';
export default [{
  method: 'POST',
  path: '/posts',
  config: {
    description: 'Inserts one post into the system',
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
    description: 'Gets the List of All posts in the system',
    handler: controllers.post.read
  }
},
{
  method: 'GET',
  path: '/posts/{id}',
  config: {
    description: 'Gets one post matching id in the request',
    handler: controllers.post.readOne
  }
},
{
  method: 'DELETE',
  path: '/posts/{id}',
  config: {
    description: 'Deletes the post with matching id from the system',
    handler: controllers.post.destroy
  }
}
];