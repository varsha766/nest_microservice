import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthRepository } from './repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
  async create(createAuthDto: CreateAuthDto) {
    return await this.authRepository.create({ ...createAuthDto });
    //return 'This action adds a new auth';
  }

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
