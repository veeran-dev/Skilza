import App from '@/app';
import AuthRoute from '@/module/auth/auth.route';
import IndexRoute from '@/module/index/index.route';
import UsersRoute from '@/module/user/users.route';
import validateEnv from '@utils/validateEnv';
import swaggerJSDoc from 'swagger-jsdoc';

validateEnv();


const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.listen();
