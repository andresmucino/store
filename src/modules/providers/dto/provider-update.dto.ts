import {
  BeforeUpdateMany,
  BeforeUpdateOne,
  UpdateManyInputType,
  UpdateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { UserContext } from 'src/auth/interface/auth.interface';
import { ProviderDTO } from './provider.dto';

@InputType('ProviderUpdate')
@BeforeUpdateOne(
  (input: UpdateOneInputType<ProviderDTO>, context: UserContext) => {
    input.update.updatedBy = context.req.user.email;
    input.update.updatedById = context.req.user.id;
    return input;
  },
)
@BeforeUpdateMany(
  (
    input: UpdateManyInputType<ProviderDTO, ProviderDTO>,
    context: UserContext,
  ) => {
    input.update.updatedBy = context.req.user.email;
    input.update.updatedById = context.req.user.id;
    return input;
  },
)
export class ProviderUpdateDTO {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  contactName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  direction?: string;
}
