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
  gallery:{
    type: [String],
  },
  logo:{
    type: String,
    require: true,
  },
  coverImage:{
    type: String,
    require: true,
  }
});

const schoolModel = model<School & Document>('School', schoolSchema);

export default schoolModel;