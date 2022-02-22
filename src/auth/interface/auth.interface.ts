import { UserEntity } from 'src/modules/user/entities/user.entity';

export type AuthenticatedUser = Pick<UserEntity, 'id' | 'email' | 'role'>;

export type JwtPayload = {
  sub: string;
  email: string;
  role: string;
};

export type UserContext = {
  req: {
    user: AuthenticatedUser;
  };
};
