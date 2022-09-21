import StatusRepository from '../repositories/sequelize/StatusRepository';

class GetStatusService {
  constructor(IStatusRepository) {
    this.statusRepository = IStatusRepository;
  }

  async execute(statusId) {
    return this.statusRepository.getStatus(statusId);
  }
}

export default new GetStatusService(StatusRepository);
