import {
  BeforeCreateMany,
  BeforeCreateOne,
  CreateManyInputType,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { nanoid } from 'nanoid';
import { UserDTO } from './user.dto';

@InputType('UserInput')
@BeforeCreateOne((input: CreateOneInputType<UserDTO>, context: any) => {
  input.input.id = nanoid(24);
  return input;
})
@BeforeCreateMany(
  (input: CreateManyInputType<UserDTO>, context: any) => {
    input.input = input.input.map((c) => {
      const id = nanoid(24);
      return {
        ...c,
        id,
      };
    });
    return input;
  },
)
export class UserInputDTO {
  @Field()
  @IsString()
  @IsNotEmpty()
  email!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  password!: string;
}
