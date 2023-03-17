import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto, CreateTokenDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthRepository } from './repository';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
  async create(createAuthDto: CreateAuthDto) {
    return await this.authRepository.create({ ...createAuthDto });
    //return 'This action adds a new auth';
  }
  // async createJwtToken(TokenPayload: CreateTokenDto) {
  //   const userData = await this.authRepository.findOne({
  //     userId: TokenPayload.userId,
  //   });
  //   const privateKey = fs.readFileSync('private.key');
  //   if (!userData) {
  //     throw new NotFoundException(
  //       `user deatil with userId ${TokenPayload.userId} not found`,
  //     );
  //   }
  //   const token = jwt.sign(TokenPayload, privateKey, { algorithm: 'RS256' });
  //   return { accessToken: token };
  // }
  fetchAllList() {
    return this.authRepository.find({});
  }

  fetchById(id: string) {
    return this.authRepository.findOne({ userId: id });
  }

  update(id: string, updateAuthDto: UpdateAuthDto) {
    return this.authRepository.findOneAndUpdate({ userId: id }, updateAuthDto);
  }

  remove(id: string) {
    return this.authRepository.findOneAndDelete({ userId: id });
  }
}
