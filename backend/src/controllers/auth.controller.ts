import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { UnauthorizedException } from '@nestjs/common';

@Controller("auth")
export class AuthController {

    constructor(private readonly service: AuthService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async sighIn(@Body() Credential: Record<string, string>) {

        const found = await this.service.validateCredential(Credential.username, Credential.password);

        if (!found) {
            throw new UnauthorizedException();
        }

        return {
            "status": "deu certo"
        }
    }
    
}