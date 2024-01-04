import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@Req() req: Request){
        return req.user;
    }
}
