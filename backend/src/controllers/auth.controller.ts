import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly service: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async sighIn(@Body() Credential: Record<string, string>) {
    const found = await this.service.validateCredential(
      Credential.username,
      Credential.password,
    );

    if (!found) {
      throw new UnauthorizedException();
    }

    const payload = {
      userId: found.id,
      username: found.username,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      accessToken: token,
    };
  }
}