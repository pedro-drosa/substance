import CreateUserService from '../services/CreateUserService';
import GetAllUserService from '../services/GetAllUserService';
import GetUserService from '../services/GetUserService';
import DeleteUserService from '../services/DeleteUserService';
import UpdateUserService from '../services/UpdateUserService';

class UserController {
  async store(request, response) {
    try {
      const { firstName, lastName, email, password } = request.body;
      const user = await CreateUserService.execute({
        firstName,
        lastName,
        email,
        password,
      });
      return response.status(201).json(user);
    } catch (error) {
      const fail = {
        message: error.message,
      };
      return response.status(500).json(fail);
    }
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

  async update(request, response) {
    const { id } = request.params;
    const { firstName, lastName, email, password } = request.body;
    try {
      const user = await UpdateUserService.execute({
        id,
        firstName,
        lastName,
        email,
        password,
      });
      return response.status(200).json(user);
    } catch (error) {
      const fail = {
        message: error.message,
      };
      return response.status(500).json(fail);
    }
  }

  async destroy(request, response) {
    const { id } = request.params;
    await DeleteUserService.execute(id);
    return response.status(204).json({ id });
  }
}

export default new UserController();
