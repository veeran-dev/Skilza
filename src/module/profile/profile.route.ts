import { Router } from 'express';
// import { CreateProfileDto } from '@/module/school/createSchool.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';
import ProfileController from './profile.controller';

class SchoolsRoute implements Routes {
  public path = '/profile';
  public router = Router();
  public profileController = new ProfileController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/getOverallStatus/:uid`, authMiddleware, this.profileController.getOverallStatus);
    this.router.get(`${this.path}/:uid`, authMiddleware, this.profileController.getProfileById);
    this.router.post(`${this.path}/`, authMiddleware, this.profileController.createProfile);
    this.router.put(`${this.path}/:uid`, authMiddleware, this.profileController.updateProfile);
    this.router.post(`${this.path}/:uid`, authMiddleware, this.profileController.addTutorProfile);
    
  }
}

export default SchoolsRoute;
