import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  profile() {
    return {
      fullname: 'Thiago Alves Ferreira',
      username: 'thiagof',
      description: 'Imagine uma descrição bonita aqui',
      createdAt: '2022-08-13 00:00:00',
    };
  }
}
