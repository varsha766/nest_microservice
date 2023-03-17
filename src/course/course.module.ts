import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseRepository } from './repository';
import { Course, CourseSchema } from './course.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  controllers: [CourseController],
  providers: [CourseService, CourseRepository],
})
export class CourseModule {}
