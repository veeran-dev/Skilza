import { hash } from 'bcryptjs';
import { CreateProfileDto } from '@/module/profile/profile.dto';
import { HttpException } from '@exceptions/HttpException';
import { Profile } from '@/module/profile/profile.interface';
import profileModel from '@/module/profile/profile.model';
import { isEmpty } from '@utils/util';
var ObjectId = require('mongodb').ObjectId; 
class ProfileService {
  public profiles = profileModel;

  public async createProfile(profileData: CreateProfileDto): Promise<Profile> {
    if (isEmpty(profileData)) throw new HttpException(400, "profileData is empty");
    const profile:any = await this.profiles.create(profileData)
    
    return profile;
  }

  public async updateProfile(uid, profileData: CreateProfileDto): Promise<Profile> {
    if (isEmpty(profileData)) throw new HttpException(400, "profileData is empty");
    console.log("update profile")
    console.log(uid)
    console.log(profileData)
    const profile:any = await this.profiles.updateOne(
                                                  {"uid":uid},
                                                  {$set:profileData})
    console.log("profile ",profile)
    return profile;
  }

  public async findProfileById(uid: string): Promise<Profile> {
    const findProfile: any = this.profiles.find({uid:uid});
    return findProfile;
  }

  }
export default ProfileService;
