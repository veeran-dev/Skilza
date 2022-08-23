import request from 'supertest';
import App from '../app';
import { CreateUserDto } from '../module/user/users.dto';
import {LoginUserDto} from '../module/user/loginUser.dto';
import { User } from '../module/user/users.interface';
import userModel from '../module/user/users.model';
import UserRoute from '../module/user/users.route';
var ObjectId = require('mongodb').ObjectId; 
afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Users', () => {
  describe('[GET] /users', () => {
    it('response statusCode 200 / findAll', async() => {
      const findUser:any = await userModel.find();
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).get(`${usersRoute.path}`).expect(200, { data: findUser, message: 'findAll' }).then(()=>app.disconnect());
    });
  });

  describe('[GET] /users/:id', () => {
    it('response statusCode 200 / findOne', async () => {
      const userId = '6303bf0d6ec14a13e8cece27';
      const findUser = await userModel.find({_id: new ObjectId(userId)});
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200, { data: findUser, message: 'findOne' }).then(()=>app.disconnect());
    });
  });

});
