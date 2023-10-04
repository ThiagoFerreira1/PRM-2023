import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { ApplicationException } from 'src/exceptions';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateCredential(username: string, password: string): Promise<User> {
    const found: User = await this.userRepository.findOneBy({ username: username });

    if (!found) {
      throw new ApplicationException('Usuário inválido', 401);
    }

    if (found.password !== password) {
      throw new ApplicationException('Senha inválida', 401);
    }

    return found;
  }
}
