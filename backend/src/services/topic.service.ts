import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { Topic } from 'src/entities/topic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic)
    private readonly repository: Repository<Topic>,
  ) {}

  findAll(): Promise<Topic[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Topic> {
    return this.repository.findOneBy({ id: id });
  }

  create(topic: Topic): Promise<Topic> {
    return this.repository.save(topic);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
