import { UserEntity } from 'src/modules/users/entity/user.entity';

export type AuthenticatedUser = Pick<UserEntity, 'id' | 'email'>;

export type JwtPayload = {
  sub: string;
  email: string;
};

export type UserContext = {
  req: {
    user: AuthenticatedUser;
  };
};
