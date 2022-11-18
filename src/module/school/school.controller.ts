import { NextFunction, Request, Response } from 'express';
import { CreateSchoolDto } from '@/module/school/createSchool.dto';
import { School } from '@/module/school/school.interface';
import schoolService from '@/module/school/school.service';

class SchoolsController {
  public schoolService = new schoolService();


  public getSchoolById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const schoolId = req.params.uid;
      const findOneSchoolData: School = await this.schoolService.findSchoolById(schoolId);

      res.status(200).json({ data: findOneSchoolData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
  

  public createSchool = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const schoolData: CreateSchoolDto = req.body;
      const createSchoolData: School = await this.schoolService.createSchool(schoolData);

      res.status(201).json({ data: createSchoolData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateSchool = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const schoolId = Number(req.params.id);
      const schoolData: CreateSchoolDto = req.body;
      const updateSchoolData: School[] = await this.schoolService.updateSchool(schoolId, schoolData);

      res.status(200).json({ data: updateSchoolData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
}

export default SchoolsController;
