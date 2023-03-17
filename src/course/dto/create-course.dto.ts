import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
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
