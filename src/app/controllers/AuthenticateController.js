import AuthenticateService from '../services/AuthenticateService';

class AuthenticateController {
  async store(request, response) {
    const { email, password } = request.body;
    try {
      const authorization = await AuthenticateService.execute(email, password);
      response.json(authorization);
    } catch (error) {
      const fail = {
        message: error.message,
      };
      response.status(500).json(fail);
    }
  }
}

export default new AuthenticateController();
