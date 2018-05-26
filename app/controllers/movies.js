import models from '../models';
import Boom from 'boom';
const getRandom = async (request, reply) => {
  try {
    const randomIndex = Math.floor((Math.random() * 4) + 1);
    const result = await models.movie.findById(randomIndex);
    reply(result);
  }
  catch(exception) {
    reply(Boom.badImplementation('Error reading Movies:', exception));
  }
};

const getFirst = async (request, reply) => {
  try {
    const result = await models.movie.findById(1);
    reply(result);
  }
  catch(exception) {
    reply(Boom.badImplementation('Error reading Movies:', exception));
  }
};


export default {getRandom, getFirst};