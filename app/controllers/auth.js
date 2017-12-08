import models from '../models';
import Boom from 'boom';
import bcrypt from 'bcrypt'
import mailer from '../mailers';

const login = async (request, reply) => {
  try {
    const { username, password } = request.payload
    const result = await models.user.findOne({
      where: {
        username: username
      }
    });
    const id = result.dataValues.id;
    const hash = result.dataValues.password;
    await bcrypt.compare(password, hash) ? reply({'status': true}) : reply(Boom.unauthorized('Wrong Password'));
  }
  catch(exception) {
    reply(Boom.badImplementation('Error login in:', exception));
  }
};

const forgotPassword = async (request, reply) => {
  const email = request.payload.email
  const result = await mailer.sendPassword(email)
  // update user password here
  reply({
    status: 'true'
  })
};

const changePassword = async (request, reply) => {
  const { email, oldPassword, newPassword, confirmPassword } = request.payload
  // logic to check
 
  // login to update user password
  reply({
    status: 'true'
  })
};

export default { login, forgotPassword, changePassword }

