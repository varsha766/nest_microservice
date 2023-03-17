import { Course, CourseDocument } from './course.schema';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseRepository {
  constructor(
    @InjectModel(Course.name)
    private readonly courseModel: Model<CourseDocument>,
  ) {}

  async findOne(courseFilterQuery: FilterQuery<Course>): Promise<Course> {
    return this.courseModel.findOne(courseFilterQuery);
  }
  async find(courseFilterQuery: FilterQuery<Course>): Promise<Course[]> {
    return this.courseModel.find(courseFilterQuery);
  }
  async create(course: Course): Promise<Course> {
    const newCourse = new this.courseModel(course);
    return newCourse.save();
  }

  async findOneAndUpdate(
    courseFilterQuery: FilterQuery<Course>,
    course: Partial<Course>,
  ): Promise<Course> {
    return this.courseModel.findOneAndUpdate(courseFilterQuery, course, {
      new: true,
    });
  }

  async findOneAndDelete(
    courseFilterQuery: FilterQuery<Course>,
  ): Promise<Course> {
    return this.courseModel.findOneAndDelete(courseFilterQuery);
  }
}
