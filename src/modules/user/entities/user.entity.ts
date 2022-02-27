import { registerEnumType } from '@nestjs/graphql';
import { CustomerEntity } from 'src/modules/customers/entities/customer.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

registerEnumType(UserRole, {
  name: 'UserRole',
});

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    name: 'email',
    type: 'text',
    unique: true,
  })
  email!: string;

  @Column({
    name: 'password',
    type: 'text',
  })
  password!: string;

  @Column({
    type: 'enum',
    array: true,
    enum: UserRole,
    // default: [UserRole.USER],
  })
  role?: string;

  @Column({
    type: 'text',
    name: 'customer_id',
    nullable: true,
  })
  customerId?: string;

  @OneToOne(() => CustomerEntity, (customer) => customer.user, {
    nullable: true,
  })
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp with time zone',
  })
  createAt!: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp with time zone',
  })
  updateAt!: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp with time zone',
  })
  deleteAt?: Date;

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
