import PromoteGuestService from '../services/PromoteGuestService';

class AdminController {
  async update(request, response) {
    try {
      const { id: userId } = request.params;
      const { roleId } = request.body;
      const updated = await PromoteGuestService.execute(userId, roleId);
      return response.status(200).json(updated);
    } catch (error) {
      const fail = {
        message: error.message,
      };
      return response.status(500).json(fail);
    }
  }
}

export default new AdminController();
