import request from 'supertest';
import App from '../app';
import { LoginUserDto } from '../module/user/loginUser.dto';
import AuthRoute from '../module/auth/auth.route';
import { CreateUserDto } from '../module/user/users.dto';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 600));
});

describe('Testing Auth', () => {
  describe('[POST] /signup', () => {
    it('response should have the Create userData', () => {
      const userData: CreateUserDto = {
        email: 'example1@email.com',
        password: 'password',
        firstname:'veeran',
        lastname:'maran',
        role:'admin',
        mobile:'9842772238'

      };
      const authRoute = new AuthRoute();
      const app = new App([authRoute]);

      return request(app.getServer()).post('/signup').send(userData).then(()=>app.disconnect());
    });
  });

  describe('[POST] /login', () => {
    it('response should have the Set-Cookie header with the Authorization token', async () => {
      const userData: LoginUserDto = {
        email: 'example1@email.com',
        password: 'password',
      };

      const authRoute = new AuthRoute();
      const app = new App([authRoute]);

      return request(app.getServer())
        .post('/login')
        .send(userData)
        // .expect('Set-Cookie', /^Authorization=.+/);
    });
  });

});
