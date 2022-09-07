import { hash } from 'bcryptjs';
import { CreateSchoolDto } from '@/module/school/createSchool.dto';
import { HttpException } from '@exceptions/HttpException';
import { School } from '@/module/school/school.interface';
import schoolModel from '@/module/school/school.model';
import { isEmpty } from '@utils/util';
var ObjectId = require('mongodb').ObjectId; 
class SchoolService {
  public schools = schoolModel;

  public async findSchoolById(schoolId: string): Promise<School> {
    const findSchool: any = this.schools.find({_id: new ObjectId(schoolId)});
    if (!findSchool) throw new HttpException(409, "School doesn't exist");

    return findSchool;
  }

  public async createSchool(schoolData: CreateSchoolDto): Promise<School> {
    if (isEmpty(schoolData)) throw new HttpException(400, "schoolData is empty");
    const school:any = this.schools.create(schoolData)
    return school;
  }

  public async updateSchool(schoolId: number, schoolData: CreateSchoolDto): Promise<School[]> {
    if (isEmpty(schoolData)) throw new HttpException(400, "schoolData is empty");

    const findSchool: any = this.schools.find({_id: new ObjectId(schoolId)});
    if (!findSchool) throw new HttpException(409, "School doesn't exist");
    
    const school:any =this.schools.updateOne(
      {_id: new ObjectId(schoolId)},
        {$set:{schoolData}});
    return school;
    };
  }
export default SchoolService;
