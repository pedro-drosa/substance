import { verify } from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

const ensureAuthenticated = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'no token sent' });
  }

  const [prefix, token] = authHeader.split(' ');

  if (prefix !== 'Bearer') {
    return response.status(401).json({ error: 'the token format is invalid' });
  }

  const { secret } = authConfig.jwt;

  try {
    const decoded = await promisify(verify)(token, secret);
    request.userId = decoded.id;
    request.roleId = decoded.roleId;
    return next();
  } catch (error) {
    return response.status(401).json('Invalid Token');
  }
};

export default ensureAuthenticated;
