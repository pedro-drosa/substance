import KnowledgeArea from '../../models/KnowledgeArea';

class KnowledgeAreasRepository {
  constructor(KnowledgeAreaModel) {
    this.knowledgeAreaModel = KnowledgeAreaModel;
  }

  async getKnowledgeArea(knowledgeAreaId) {
    return this.knowledgeAreaModel.findByPk(knowledgeAreaId);
  }
}

export default new KnowledgeAreasRepository(KnowledgeArea);
