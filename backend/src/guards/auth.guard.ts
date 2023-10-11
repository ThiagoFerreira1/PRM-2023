import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../services/user.service';
import { userInfo } from 'os';

@Injectable()
export class AuthGuard implements CanActivate {
    
  constructor(private readonly jwtService: JwtService, private readonly UserService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    // Verifica se o token existe
    if (!token) {
      throw new UnauthorizedException('Token inexistente');
    }

    // Verifica se o token é válido
    let username = '';
    try {
      const payload = await this.jwtService.verifyAsync(token);
        username  = payload.userName;

      console.log('PAYLOAD', payload)

    } catch (error) {
      throw new UnauthorizedException('Token inválido')
    }

    // Valida se o usuário existe
    const found = await this.UserService.findByUsername(username)

    if(!found)
    {
        throw new UnauthorizedException('Usuário inxistente');
    }

    console.log(found)

    return true;
  }

  extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}
