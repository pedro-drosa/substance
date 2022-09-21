import { Router } from 'express';
import ProofReaderController from '../controllers/ProofReaderController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ensureAdministratorOrProofreader from '../middlewares/ensureAdministratorOrProofreader';

const proofReaderRouter = Router();

proofReaderRouter.use(ensureAuthenticated, ensureAdministratorOrProofreader);
proofReaderRouter.patch('/:id', ProofReaderController.update);

export default proofReaderRouter;
