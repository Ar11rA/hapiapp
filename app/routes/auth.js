'use strict';

import Joi from 'joi';
import controllers from '../controllers';

export default [{
  method: 'POST',
  path: '/login',
  config: {
    auth: false,
    description: 'Inserts one post into the system',
    handler: controllers.auth.login,
    validate: {
      payload: {
        username: Joi.string().required(),
        password: Joi.string().required()
      }
    }
  }
},
{
  method: 'POST',
  path: '/forgot',
  config: {
    description: 'Sends mail for forgotten password',
    handler: controllers.auth.forgotPassword,
    validate: {
      payload: {
        email: Joi.string().required()
      }
    }
  }
}
];