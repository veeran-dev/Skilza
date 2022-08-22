import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto } from '@/module/user/users.dto';
import { LoginUserDto } from '../user/loginUser.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@/module/auth/auth.interface';
import { User } from '@/module/user/users.interface';
import userModel from '@/module/user/users.model';
import { isEmpty } from '@utils/util';

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

class AuthService {
  public users = userModel;

  public async signup(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: any = await this.users.findOne({email:userData.email});
    console.log('findUser')
    console.log(findUser)
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const createUserData: User = await this.users.create({
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      role: userData.role,
      password: bcrypt.hashSync(userData.password, 8)
    })

    return createUserData;
  }

  public async login(userData: LoginUserDto){
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: any = await this.users.find({email:userData.email});
    console.log("findUser")
    console.log(findUser)
    console.log(findUser[0])
    if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

    console.log('userData.password ', userData.password)
    console.log('findUser.password ', findUser[0].password)
    var passwordIsValid = bcrypt.compareSync(
      userData.password,
      findUser[0].password
    );
    if (!passwordIsValid) {
      return false
    }
    var token :any= jwt.sign({
      id: findUser.id
    }, SECRET_KEY, {
      expiresIn: 86400
    });

    let user = {
      id: findUser[0]._id,
      email: findUser[0].email,
      firstname: findUser[0].firstname,
    };

    return { "token": token, "user":user };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: any = await this.users.findOne({email:userData.email,password : userData.password});
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
