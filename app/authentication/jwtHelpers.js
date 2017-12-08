import JWT from 'jsonwebtoken';

export const encode = async (user, secret='secret') => await JWT.sign(user, secret)
export const decode = async (token, secret='secret')  => await JWT.verify(token, secret)
