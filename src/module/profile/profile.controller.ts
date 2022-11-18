import { NextFunction, Request, Response } from 'express';
import { CreateProfileDto } from '@/module/profile/profile.dto';
import { School } from '@/module/school/school.interface';
import schoolService from '@/module/school/school.service';
import profileService from './profile.service';
import { Profile } from './profile.interface';

interface overallStatus {
  "schoolRegistered":true,
  "classAdded":false,
  "scheduleAdded":false,

}

class ProfileController {
  public profileService = new profileService();
  public schoolService = new schoolService();


  public getOverallStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const schoolId = req.params.uid;
      const schoolData: any = await this.schoolService.findSchoolById(schoolId);
      console.log('schoolData')
      console.log(schoolData)
      console.log(schoolData && schoolData.length > 0 ? true : false)
      res.status(200).json({
        data:{
        "schoolRegistered": schoolData && schoolData.length > 0 ? true : false,
        "classAdded":false,
        "scheduleAdded":false,
        },
        message: 'overallStatus'
      });
    } catch (error) {
      next(error);
    }
  };
  
  public createProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const profileData: CreateProfileDto = req.body;
      const createProfileData: any = await this.profileService.createProfile(profileData);

      res.status(201).json({ data: createProfileData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log('req.body');
      console.log(req.body);
      const uid = req.params.uid;
      const profileData: CreateProfileDto = req.body;
      const createProfileData: any = await this.profileService.updateProfile(uid, profileData);

      res.status(201).json({ data: createProfileData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };


  public getProfileById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const uid = req.params.uid;
      const findOneProfileData: Profile = await this.profileService.findProfileById(uid);

      res.status(200).json({ data: findOneProfileData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };


public addTutorProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('req.body');
    console.log(req.body);

    res.status(201).json({ data: "createProfileData", message: 'created' });
  } catch (error) {
    next(error);
  }
};
}

export default ProfileController;
