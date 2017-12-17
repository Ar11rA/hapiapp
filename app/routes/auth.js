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
        username: Joi.string().email(),
        password: Joi.string().required()
      }
    }
  }
},
{
  method: 'POST',
  path: '/forgot',
  config: {
    auth: false,
    description: 'Sends mail for forgotten password',
    handler: controllers.auth.forgotPassword,
    validate: {
      payload: {
        email: Joi.string().required()
      }
    }
  }
},
{
  method: 'POST',
  path: '/changePassword',
  config: {
    auth: false,
    description: 'Change password',
    handler: controllers.auth.changePassword,
    validate: {
      payload: {
        email: Joi.string().email(),
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().required(),
        confirmPassword: Joi.string().required()
      }
    }
  }
}
];