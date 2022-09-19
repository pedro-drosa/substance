const ensureProofReaderRole = async (request, response, next) => {
  if (request.roleId === 2) {
    return next();
  }
  return response
    .status(401)
    .json({ error: 'Your user role is note authorized to do this action' });
};

export default ensureProofReaderRole;
