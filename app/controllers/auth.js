import models from '../models';
import Boom from 'boom';
const login = async (request, reply) => {
  try {
    const { username, password } = request.payload
    const result = await models.user.findAll({
      where: {
        username: username
      }
    });
    result[s].dataValues.password === password ? reply({'status': true}) : reply(Boom.unauthorized('Wrong Password'));
  }
  catch(exception) {
    reply(Boom.badImplementation('Error login in:', exception));
  }
};

export default { login } 