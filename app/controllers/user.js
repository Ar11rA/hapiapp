import models from '../models';
import Boom from 'boom';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

const read = async (request, reply) => {
  try {
    const result = await models.user.findAll({
      include: [
        {
          model: models.post
        }
      ]
    });
    reply({'Users': result});
  }
  catch(exception) {
    reply(Boom.badImplementation('Error reading users:', exception));
  }
};

const readOne = async (request, reply) => {
  try {
    const { id, username } = await JWT.verify(request.headers.authorization, 'secret');
    if(id != request.params.id) {
      reply(Boom.unauthorized('Invalid user ID'))
    }
    const result = await models.user.findAll({
      where: {
        id: request.params.id
      },
      include: [
        {
          model: models.post
        }
      ]
    });
    reply({'User': result});
  }
  catch(exception) {
    reply(Boom.badImplementation('Error reading user:', exception));
  }
};

const create = async (request, reply) => {
  try {
    const password = request.payload.password
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await models.user.create({
      username: request.payload.username,
      password: hashedPassword
    });
    reply({'Users': result});
  }
  catch(exception) {  
    reply(Boom.badImplementation('Error creating user:', exception))
  }
};

export default {read, readOne, create};