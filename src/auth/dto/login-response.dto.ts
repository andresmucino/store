import { Field } from '@nestjs/graphql';

export class LoginResponseDto {
  @Field()
  accessToken!: string;
}
