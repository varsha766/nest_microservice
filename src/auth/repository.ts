import { Auth, AuthDocument } from './app.schema';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(Auth.name) private readonly authModel: Model<AuthDocument>,
  ) {}

  async findOne(authFilterQuery: FilterQuery<Auth>): Promise<Auth> {
    return this.authModel.findOne(authFilterQuery);
  }
  async find(authFilterQuery: FilterQuery<Auth>): Promise<Auth[]> {
    return this.authModel.find(authFilterQuery);
  }
  async create(auth: Auth): Promise<Auth> {
    const newAuth = new this.authModel(auth);
    return newAuth.save();
  }

  async findOneAndUpdate(
    authFilterQuery: FilterQuery<Auth>,
    auth: Partial<Auth>,
  ): Promise<Auth> {
    return this.authModel.findOneAndUpdate(authFilterQuery, auth, {
      new: true,
    });
  }

  async findOneAndDelete(authFilterQuery: FilterQuery<Auth>): Promise<Auth> {
    return this.authModel.findOneAndDelete(authFilterQuery);
  }
}
