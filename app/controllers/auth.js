import models from '../models';
import Boom from 'boom';
import bcrypt from 'bcrypt';
import { encode } from '../authentication/jwtHelpers';
import mailer from '../mailers';

const login = async (request, reply) => {
  try {
    const { username, password } = request.payload;
    const result = await models.user.findOne({where: {username: username}});
    !result && reply(Boom.unauthorized('User not registered'))
    const id = result.dataValues.id;
    const hash = result.dataValues.password;
    const user = { id, username }
    await bcrypt.compare(password, hash) ? reply({'token': await encode(user)}) : reply(Boom.unauthorized('Wrong Password'));
  }
  catch(exception) {
    reply(Boom.badImplementation('Error login in:', exception));
  }
};

const forgotPassword = async (request, reply) => {
  try {
    const email = request.payload.email;
    const password = await mailer.sendPassword(email);
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await models.user.update({
      password: hashedPassword
    },
    {
      where: {username: email}
    });
    reply({
      status: 'true'
    })
  }
  catch(exception) {
    reply(Boom.badImplementation('Error:', exception))
  }
};

const changePassword = async (request, reply) => {
  try {
    const { email, oldPassword, newPassword, confirmPassword } = request.payload
    const user = await models.user.findOne({where: {username: email}});
    const hash = user.dataValues.password;
    const id = user.dataValues.id;
    const isPasswordCorrect = await bcrypt.compare(oldPassword, hash)
    !isPasswordCorrect && reply(Boom.unauthorized('User not registered'))
    newPassword === confirmPassword ? updatePassword(id, newPassword, reply) : reply(Boom.badImplementation('Error:', exception));
  }
  catch(exception) {
    reply(Boom.badImplementation('Error:', exception))
  }
};

const updatePassword = async (id, password, reply) => {
  try {
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await models.user.update({
    password: hashedPassword
  },
  {
    where: {id: id}
  });
  reply({
    status: 'true'
  })
  }
  catch(exception) {
    throw(Boom.badImplementation('Error:', exception))
  }
}

export default { login, forgotPassword, changePassword }

