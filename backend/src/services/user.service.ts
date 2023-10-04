import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { User } from 'src/entities/user.entity';
import { ApplicationException } from 'src/exceptions';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  //usa colchetes pois retorna um vetor com todos os registros
  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<User> {
    return this.repository.findOneBy({ id: id });
  }

  findByUsername(username: string): Promise<User> {
    return this.repository.findOneBy({ username: username });
  }

  create(user: User): Promise<User> {
    return this.repository.save(user);
  }

  //Para excluir é void nao precisa retornar nada
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update (id: number, user: User): Promise<User> {
    const found = await this.repository.findOneBy({ id: id });

    if (!found) {
      throw new ApplicationException('User not found', 404)
    }

    //Garante que o objeto substituido terá o mesmo ID da requisição
    user.id = id;

    return this.repository.save(user);
  }
}
