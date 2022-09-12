import CreateUserService from '../services/CreateUserService';

class Controller {
  async store(request, response) {
    const { firstName, lastName, email, password } = request.body;
    const user = await CreateUserService.execute({
      firstName,
      lastName,
      email,
      password,
    });
    return response.status(201).json(user);
  }
}

export default new Controller();
