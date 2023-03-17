import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './repository';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema, Auth } from './app.schema';
import { JwtModule } from '@nestjs/jwt';
//import { JwtStrategy } from './strategy/jwt.strategy';
import * as fs from 'fs';
import * as path from 'path';

// const publicKeyPath = path.resolve(__dirname, 'cert', 'public.key');
// const privateKeyPath = path.resolve(__dirname, 'cert', 'private.key');

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    // JwtModule.register({
    //   publicKey: fs.readFileSync(path.resolve(__dirname, 'cert/public.key')),
    //   privateKey: fs.readFileSync(path.resolve(__dirname, 'cert/private.key')),
    //   signOptions: { expiresIn: '1d', algorithm: 'RS256' },
    // }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
