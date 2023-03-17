import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseRepository } from './repository';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async create(createCourseDto: CreateCourseDto) {
    return await this.courseRepository.create({ ...createCourseDto });
  }

  findAll() {
    return this.courseRepository.find({});
  }

  findOne(id: string) {
    return this.courseRepository.findOne({ _id: id });
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.findOneAndUpdate({ _id: id }, updateCourseDto);
  }

  remove(id: string) {
    return this.courseRepository.findOneAndDelete({ _id: id });
  }
}
