import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }
}
