import { CustomerEntity } from 'src/modules/customers/entities/customer.entity';
import { ProductEntity } from 'src/modules/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryColumn({
    type: 'text',
    name: 'id',
  })
  id!: string;

  @Column({
    type: 'timestamp with time zone',
    name: 'date',
  })
  date!: Date;

  @Column({
    type: 'int',
    name: 'quantity',
    nullable: true,
  })
  quantity?: number;

  // @Column({
  //   nullable: true,
  //   name: 'customer_id',
  //   type: 'text',
  // })
  // customerId?: string;

  // @ManyToOne(() => CustomerEntity, (customer) => customer.orders, {
  //   nullable: true,
  // })
  // @JoinColumn({ name: 'customer_id' })
  // customer?: CustomerEntity;

  // @OneToMany(() => ProductEntity, (product) => product.order, {
  //   nullable: true,
  // })
  // products?: ProductEntity[];

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
