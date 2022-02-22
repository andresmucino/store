import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthenticatedUser, JwtPayload } from '../interface/auth.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtConstantsecret',
    });
  }

  validate(payload: JwtPayload): Promise<AuthenticatedUser> {
    return Promise.resolve({
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    });
  }
}
