import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/modules/user/entities/user.entity';

export const ROLE_KEY = 'roles';

export const Role = (...roles: UserRole[]) => SetMetadata(ROLE_KEY, roles);
