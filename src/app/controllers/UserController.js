import CreateUserService from '../services/CreateUserService';
import GetAllUserService from '../services/GetAllUserService';
import GetUserService from '../services/GetUserService';

class UserController {
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

  async index(request, response) {
    const users = await GetAllUserService.execute();
    return response.status(200).json(users);
  }

  async get(request, response) {
    const { id } = request.params;
    const users = await GetUserService.execute(id);
    return response.status(200).json(users);
  }
}

export default new UserController();
