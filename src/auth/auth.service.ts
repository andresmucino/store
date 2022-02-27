/* eslint-disable @typescript-eslint/no-unused-vars */
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/modules/user/dto/user.dto';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { LoginResponseDto } from './dto/login-response.dto';
import { AuthenticatedUser, JwtPayload } from './interface/auth.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectQueryService(UserEntity)
    private userService: QueryService<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async ValidateUser(
    email: string,
    password: string,
  ): Promise<AuthenticatedUser | null> {
    const [user] = await this.userService.query({
      filter: { email: { eq: email } },
    });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const { password, ...result } = user;

        return result;
      }
    }

    return null;
  }

  async currentUser(authUser: AuthenticatedUser): Promise<UserDTO> {
    try {
      const user = await this.userService.getById(authUser.id);
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  login(user: AuthenticatedUser): Promise<LoginResponseDto> {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };
    return Promise.resolve({
      accessToken: this.jwtService.sign(payload),
    });
  }
}
