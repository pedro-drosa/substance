import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import userRouter from './users.routes';
import articleRouter from './article.routes';
import authenticateRouter from './authenticate.routes';
import adminRouter from './admin.routes';
import proofReaderRouter from './proofreader.routes';
import swaggerRouter from './swagger.routes';

const routes = Router();

routes.use('/', swaggerUi.serve, swaggerRouter);
routes.use('/sessions', authenticateRouter);
routes.use('/articles', articleRouter);
routes.use('/administrators', adminRouter);
routes.use('/users', userRouter);
routes.use('/proofreaders', proofReaderRouter);
export default routes;
