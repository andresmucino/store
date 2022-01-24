import { CustomerEntity } from 'src/customers/entity/customer.entity';
import { ProductEntity } from 'src/products/entity/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  date: Date;

  @ManyToOne(() => CustomerEntity, (customer) => customer.orders, {
    nullable: true,
  })
  customer: CustomerEntity;

  @OneToMany(() => ProductEntity, (product) => product.order, {
    nullable: true,
  })
  products: ProductEntity[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
