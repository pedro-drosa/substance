import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../../swagger.json';

const userRouter = Router();

userRouter.use('/', swaggerUi.serve);
userRouter.get('/', swaggerUi.setup(swaggerDocument));

export default userRouter;
