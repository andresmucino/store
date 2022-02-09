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
import { GqlContext } from 'src/config';
import { ProviderDto } from './provider.dto';

@InputType('ProviderInput')
@BeforeCreateOne(
  (input: CreateOneInputType<ProviderDto>, context: GqlContext) => {
    input.input.id = nanoid(24);
    // input.input.createdBy = context.request.headers.email;
    // input.input.createdById = context.request.headers.sub;
    // input.input.updatedBy = context.request.headers.email;
    // input.input.updatedById = context.request.headers.sub;
    return input;
  },
)
@BeforeCreateMany(
  (input: CreateManyInputType<ProviderDto>, context: GqlContext) => {
    // const createdBy = context.request.headers.email;
    // const createdById = context.request.headers.sub;
    // const updatedBy = context.request.headers.email;
    // const updatedById = context.request.headers.sub;
    input.input = input.input.map((c) => {
      const id = nanoid(24);
      return {
        ...c,
        id,
        // createdBy,
        // createdById,
        // updatedBy,
        // updatedById,
      };
    });
    return input;
  },
)
export class ProviderInputDto {
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

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  productId?: string;
}
