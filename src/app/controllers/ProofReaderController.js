import ChangeArticleStatusService from '../services/ChangeArticleStatusService';

class ProofReaderController {
  async update(request, response) {
    try {
      const { id: articleId } = request.params;
      const { statusId } = request.body;
      const updated = await ChangeArticleStatusService.execute(
        articleId,
        statusId,
      );
      return response.status(200).json(updated);
    } catch (error) {
      const fail = {
        message: error.message,
      };
      return response.status(500).json(fail);
    }
  }
}

export default new ProofReaderController();
