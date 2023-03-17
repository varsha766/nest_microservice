import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
