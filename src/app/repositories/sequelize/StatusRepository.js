import Status from '../../models/Status';

class StatusRepository {
  constructor(StatusModel) {
    this.statusModel = StatusModel;
  }

  async getStatus(statusId) {
    return this.statusModel.findByPk(statusId);
  }
}

export default new StatusRepository(Status);
