import { OrderEntity } from 'src/modules/orders/entities/order.entity';
import { ProviderEntity } from 'src/modules/providers/entities/provider.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
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
    name: 'description',
  })
  description!: string;

  @Column({
    type: 'int',
    name: 'price',
  })
  price!: number;

  @Column({
    type: 'int',
    name: 'stock',
  })
  stock!: number;

  @Column({
    type: 'text',
    name: 'image',
    nullable: true,
  })
  image?: string;

  // @OneToOne(() => ProviderEntity, (provider) => provider.product, {
  //   nullable: true,
  // })
  // provider?: ProviderEntity;

  // @Column({
  //   nullable: true,
  //   name: 'order_id',
  //   type: 'text',
  // })
  // orderId?: string;

  // @ManyToOne(() => OrderEntity, (order) => order.products, { nullable: true })
  // @JoinColumn({ name: 'order_id' })
  // order?: OrderEntity;

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
    type: 'time with time zone',
    name: 'create_at',
  })
  createAt!: Date;

  @UpdateDateColumn({
    type: 'time with time zone',
    name: 'update_at',
  })
  updateAt!: Date;

  @DeleteDateColumn({
    type: 'time with time zone',
    name: 'delete_at',
  })
  deleteAt?: Date;
}
