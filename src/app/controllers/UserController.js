import CreateUserService from '../services/CreateUserService';
import GetAllUserService from '../services/GetAllUserService';
import GetUserService from '../services/GetUserService';
import DeleteUserService from '../services/DeleteUserService';

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

  async destroy(request, response) {
    const { id } = request.params;
    await DeleteUserService.execute(id);
    return response.status(204).json({ id });
  }
}

export default new UserController();
