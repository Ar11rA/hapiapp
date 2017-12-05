import models from '../models';
import Boom from 'boom';
const read = async (request, reply) => {
  try {
    const result = await models.post.findAll();
    reply({'Posts': result});
  }
  catch(exception) {
    reply(Boom.badImplementation('Error reading Posts:', exception));
  }
};

const readOne = async (request, reply) => {
  try {
    const result = await models.post.findById(request.params.id);
    reply({'Post': result});
  }
  catch(exception) {
    reply(Boom.badImplementation('Error reading Post:', exception));
  }
};


const create = async (request, reply) => {
  try {
    const result = await models.post.create({
      title: request.payload.title,
      categories: request.payload.categories,
      content: request.payload.content,
      user_id: request.payload.user_id
    });
    reply({'Posts': result});
  }
  catch(exception) {
    reply(Boom.badImplementation('Error creating user:', exception))
  }
};

const destroy = async (request, reply) => {
  try {
    const result = await models.post.destroy({
      where: {
        id: request.params.id
      }
    })
    reply({'Posts': result});
  }
  catch(exception) {
    reply(Boom.badImplementation('Error creating user:', exception))
  }
};


export default {read, readOne, create, destroy};