import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'customer' })
export class CustomerEntity {
  @PrimaryColumn({
    type: 'text',
    name: 'id',
  })
  id!: string;

  @Column({
    type: 'text',
    name: 'name',
  })
  name!: string;

  @Column({
    type: 'text',
    name: 'lastname',
  })
  lastname!: string;

  @Column({
    type: 'text',
    name: 'phone',
  })
  phone!: string;

  @Column({
    type: 'text',
    name: 'direction',
  })
  direction!: string;

  @Column({
    type: 'text',
    name: 'avatar',
    nullable: true,
  })
  avatar?: string;

  @Column({
    type: 'text',
    name: 'user_id',
    nullable: true,
  })
  userId?: string;

  @OneToOne(() => UserEntity, (user) => user.customer, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  // @OneToMany(() => OrderEntity, (order) => order.customer, { nullable: true })
  // orders: OrderEntity[];

  @Column({
    type: 'text',
    name: 'created_by',
    nullable: true,
  })
  createdBy!: string;

  @Column({
    type: 'text',
    name: 'created_by_id',
    nullable: true,
  })
  createdById!: string;

  @Column({
    type: 'text',
    name: 'updated_by',
    nullable: true,
  })
  updatedBy!: string;

  @Column({
    type: 'text',
    name: 'updated_by_id',
    nullable: true,
  })
  updatedById!: string;

  @Column({
    type: 'text',
    name: 'deleted_by',
    nullable: true,
  })
  deletedBy!: string;

  @Column({
    type: 'text',
    name: 'deleted_by_id',
    nullable: true,
  })
  deletedById!: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    name: 'create_at',
  })
  createAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'update_at',
  })
  updateAt!: Date;

  @DeleteDateColumn({
    type: 'timestamp with time zone',
    name: 'delete_at',
    nullable: true,
  })
  deleteAt?: Date;
}
