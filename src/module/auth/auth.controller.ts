import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/module/user/users.dto';
import { LoginUserDto } from '@/module/user/loginUser.dto';
import { RequestWithUser } from '@/module/auth/auth.interface';
import { User } from '@/module/user/users.interface';
import AuthService from '@/module/auth/auth.service';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user: LoginUserDto = req.body;
      const login = await this.authService.login(user);

      if (!login) {
        res.status(401)
          .send({
            accessToken: null,
            message: "Invalid Password!"
          });
      }
      res.status(200)
        .send({
          user: login['user'],
          message: "Login successfull",
          accessToken: login['token'],
        });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
