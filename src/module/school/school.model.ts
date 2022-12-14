import { model, Schema, Document } from 'mongoose';
import { School } from '@/module/school/school.interface';

const schoolSchema: Schema = new Schema({
  schoolName: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  lang:{
    type: Number,
    required: true,
  },
  long:{
    type: Number,
    require: true,
  },
  address:{
    type: String,
    require: true,
  },
  city:{
    type: String,
    require: true,
  },
  pincode:{
    type: String,
    require: true,
  },
  contact:{
    type: String,
    require: true,
  },
  addressProof:{
    type: String,
    require: true,
  }
});

const schoolModel = model('School', schoolSchema);

export default schoolModel;