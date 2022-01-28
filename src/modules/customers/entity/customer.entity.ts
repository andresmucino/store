import { OrderEntity } from 'src/modules/orders/entity/order.entity';
import { UserEntity } from 'src/modules/users/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'customer' })
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  phone!: string;

  @Column()
  email!: string;

  @Column()
  direction!: string;

  @Column()
  image: string;

  @OneToOne(() => UserEntity, (user) => user.customer, { nullable: true })
  user: UserEntity;

  @OneToMany(() => OrderEntity, (order) => order.customer, { nullable: true })
  orders: OrderEntity[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
