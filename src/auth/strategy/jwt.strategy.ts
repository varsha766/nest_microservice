// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy, ExtractJwt } from 'passport-jwt';
// import { JwtPayload } from 'jsonwebtoken';
// import * as fs from 'fs';
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
//   constructor() {
//     //   private readonly config: ConfigService
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: fs.readFileSync('../cert/public.key'),
//     });
//   }
//   async validate(payload: JwtPayload) {
//     return { userId: payload.sub, username: payload.username };
//   }
// }
