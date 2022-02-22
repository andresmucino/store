import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { UserRole } from 'src/modules/user/entities/user.entity';
import { ROLE_KEY } from '../decorators/role.decorator';
import { JwtPayload } from '../interface/auth.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<UserRole[]>(
      ROLE_KEY,
      context.getHandler(),
    );
    if (!roles) {
      return true;
    }
    const request = GqlExecutionContext.create(context).getContext().req;

    const user = request.user as JwtPayload;

    const [roleUser] = user.role;

    const isAuth = roles.some((role) => role === roleUser);

    if (!isAuth) {
      throw new UnauthorizedException('your role is wrong');
    }

    return isAuth;
  }
}
