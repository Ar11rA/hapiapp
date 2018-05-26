import models from '../models';
import Boom from 'boom';
const getRandom = async (request, reply) => {
  try {
    const randomIndex = Math.floor((Math.random() * 4) + 1);
    const result = await models.movie.findById(randomIndex);
    reply(result);
  }
  catch(exception) {
    reply(Boom.badImplementation('Error reading Posts:', exception));
  }
};


export default {getRandom};