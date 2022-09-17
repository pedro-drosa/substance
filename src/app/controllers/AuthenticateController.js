import AuthenticateService from '../services/AuthenticateService';

class AuthenticateController {
  async store(request, response) {
    const { email, password } = request.body;
    const authorization = await AuthenticateService.execute(email, password);
    response.json(authorization);
  }
}

export default new AuthenticateController();
