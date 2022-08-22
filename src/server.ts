import App from '@/app';
import AuthRoute from '@/module/auth/auth.route';
import IndexRoute from '@/module/index/index.route';
import UsersRoute from '@/module/user/users.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
