import {
  BeforeCreateMany,
  BeforeCreateOne,
  CreateManyInputType,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { nanoid } from 'nanoid';
import { UserContext } from 'src/auth/interface/auth.interface';
import { ProviderDTO } from './provider.dto';

@InputType('ProviderInput')
@BeforeCreateOne(
  (input: CreateOneInputType<ProviderDTO>, context: UserContext) => {
    input.input.id = nanoid(24);
    console.log(context.req.user.email);
    input.input.createdBy = context.req.user.email;
    input.input.createdById = context.req.user.id;
    input.input.updatedBy = context.req.user.email;
    input.input.updatedById = context.req.user.id;
    return input;
  },
)
@BeforeCreateMany(
  (input: CreateManyInputType<ProviderDTO>, context: UserContext) => {
    const createdBy = context.req.user.email;
    const createdById = context.req.user.id;
    const updatedBy = context.req.user.email;
    const updatedById = context.req.user.id;
    input.input = input.input.map((c) => {
      const id = nanoid(24);
      return {
        ...c,
        id,
        createdBy,
        createdById,
        updatedBy,
        updatedById,
      };
    });
    return input;
  },
)
export class ProviderInputDTO {
  @Field()
  @IsString()
  @IsNotEmpty()
  contactName!: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @Field()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  direction!: string;

  // @Field({ nullable: true })
  // @IsOptional()
  // @IsString()
  // @IsNotEmpty()
  // productId?: string;
}
