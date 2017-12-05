'use strict';

import Joi from 'joi';
import controllers from '../controllers';

export default [{
  method: 'POST',
  path: '/login',
  config: {
    description: 'Inserts one post into the system',
    handler: controllers.auth.login,
    validate: {
      payload: {
        username: Joi.string().required(),
        password: Joi.string().required()
      }
    }
  }
}
];