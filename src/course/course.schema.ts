import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
  @Prop({ require: true })
  courseName: string;
  @Prop({ required: true })
  coursePrice: number;
  @IsEmail()
  @Prop({ required: true })
  courseType: string;
  @Prop()
  description: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
CourseSchema.index({ courseName: 1 }, { unique: true });
