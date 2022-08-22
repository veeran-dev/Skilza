import { model, Schema, Document } from 'mongoose';
import { User } from '@/module/user/users.interface';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname:{
    type: String,
    require: true,
  },
  lastname:{
    type: String,
    require: true,
  },
  mobile:{
    type: Number,
    require: true,
  },
  role:{
    type: String,
    require: true,
  }
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;