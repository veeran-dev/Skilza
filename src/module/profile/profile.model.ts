import { model, Schema, Document } from 'mongoose';
import { Profile } from '@/module/profile/profile.interface';

const schema: Schema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  tag:{
    type: String,
    required: true,
  },
  profileImage:{
    type: String,
    require: true,
  },
  facebook:{
    type: String,
    require: true,
  },
  instagram:{
    type: String,
    require: true,
  },
  linkedin:{
    type: String,
    require: true,
  },
  youtube:{
    type: String,
    require: true,
  },
  galleryImage:{
    type: Array,
    require: true,
  }
});

const profileModel = model('Profile', schema);

export default profileModel;