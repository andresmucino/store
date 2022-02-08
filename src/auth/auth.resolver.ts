import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserDto } from 'src/modules/user/dto/user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';
import { LoginInputDTO } from './dto/login-input.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthenticatedUser } from './interface/auth.interface';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDto)
  async login(@Args('input') input: LoginInputDTO): Promise<LoginResponseDto> {
    const user = await this.authService.ValidateUser(
      input.email,
      input.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() user: AuthenticatedUser): Promise<UserDto> {
    return this.authService.currentUser(user);
  }
}