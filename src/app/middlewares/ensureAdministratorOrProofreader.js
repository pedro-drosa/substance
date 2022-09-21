const ADMIN = 3;
const PROOFREADER = 2;

const ensureAdministratorOrProofreader = async (request, response, next) => {
  const { roleId: role } = request;

  if (role !== ADMIN && role !== PROOFREADER) {
    return response
      .status(401)
      .json({ error: 'Your user role is note authorized to do this action' });
  }

  return next();
};

export default ensureAdministratorOrProofreader;
