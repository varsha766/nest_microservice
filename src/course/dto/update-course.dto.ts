import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsString()
  @IsNotEmpty()
  courseName: string;
  @IsNumber()
  coursePrice: number;
  @IsString()
  @IsNotEmpty()
  courseType: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
