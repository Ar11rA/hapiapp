import models from '../models';
import Boom from 'boom';
import bcrypt from 'bcrypt'

const login = async (request, reply) => {
  try {
    const { username, password } = request.payload
    const result = await models.user.findAll({
      where: {
        username: username
      }
    });
    const id = result[0].dataValues.id
    const hash = result[0].dataValues.password
    await bcrypt.compare(password, hash) ? reply({'status': true}) : reply(Boom.unauthorized('Wrong Password'));
  }
  catch(exception) {
    reply(Boom.badImplementation('Error login in:', exception));
  }
};

export default { login } 