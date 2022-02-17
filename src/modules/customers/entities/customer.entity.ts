import { OrderEntity } from 'src/modules/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
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

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  phone!: string;

  @Column()
  direction!: string;

  @Column({ nullable: true })
  image?: string;

  // @OneToMany(() => OrderEntity, (order) => order.customer, { nullable: true })
  // orders: OrderEntity[];

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;

  @DeleteDateColumn()
  deleteAt?: Date;
}
