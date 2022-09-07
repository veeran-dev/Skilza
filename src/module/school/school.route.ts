import { Router } from 'express';
import SchoolsController from '@/module/school/school.controller';
import { CreateSchoolDto } from '@/module/school/createSchool.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';

class SchoolsRoute implements Routes {
  public path = '/school';
  public router = Router();
  public schoolsController = new SchoolsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, authMiddleware, this.schoolsController.getSchoolById);
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(CreateSchoolDto, 'body'), this.schoolsController.createSchool);
    this.router.put(`${this.path}/:id`, authMiddleware, validationMiddleware(CreateSchoolDto, 'body', true), this.schoolsController.updateSchool);
    
  }
}

export default SchoolsRoute;
