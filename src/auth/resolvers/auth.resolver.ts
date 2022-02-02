import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginResponseDto } from '../dto/login-response.dto';
import { LoginInputDto } from '../dto/login-input.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { CurrentUser } from '../decorators/public.decorator';
import { AuthenticatedUser } from '../interfaces/auth.interfaces';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDto)
  async login(@Args('input') input: LoginInputDto): Promise<LoginResponseDto> {
    const user = await this.authService.validateUser(
      input.email,
      input.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => UserDto)
  me(@CurrentUser() user: AuthenticatedUser): Promise<UserDto> {
    return this.authService.currentUser(user);
  }
}
