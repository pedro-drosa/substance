import KnowledgeAreasRepository from '../repositories/sequelize/KnowledgeAreasRepository';

class GetUserService {
  constructor(IKnowledgeAreasRepository) {
    this.knowledgeAreasRepository = IKnowledgeAreasRepository;
  }

  async execute(knowledgeAreaId) {
    return this.knowledgeAreasRepository.getKnowledgeArea(knowledgeAreaId);
  }
}

export default new GetUserService(KnowledgeAreasRepository);
