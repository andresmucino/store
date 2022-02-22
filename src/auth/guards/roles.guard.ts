import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { UserRole } from 'src/modules/user/entities/user.entity';
import { ROLE_KEY } from '../decorators/role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<UserRole[]>(
      ROLE_KEY,
      context.getHandler(),
    );

    if (roles) {
      const request = GqlExecutionContext.create(context).getContext().req;

      return request.user.roles.some(
        (role: UserRole) => !!roles.find((item) => item === role),
      );
    }

    return true;
  }
}
