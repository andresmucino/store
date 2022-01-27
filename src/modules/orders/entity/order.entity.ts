import { CustomerEntity } from 'src/modules/customers/entity/customer.entity';
import { ProductEntity } from 'src/modules/products/entity/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  date!: Date;

  @Column({
    nullable: true,
    name: 'customer_id',
    type: 'text',
  })
  customerId?: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.orders, {
    nullable: true,
  })
  @JoinColumn({ name: 'customer_id' })
  customer?: CustomerEntity;

  @OneToMany(() => ProductEntity, (product) => product.order, {
    nullable: true,
  })
  products?: ProductEntity[];

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;

  @DeleteDateColumn()
  deleteAt?: Date;
}
