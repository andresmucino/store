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
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column()
  stock!: number;

  @Column({ nullable: true })
  image?: string;

  @OneToOne(() => ProviderEntity, (provider) => provider.product, {
    nullable: true,
  })
  provider?: ProviderEntity;

  @Column({
    nullable: true,
    name: 'order_id',
    type: 'text',
  })
  orderId?: string;

  @ManyToOne(() => OrderEntity, (order) => order.products, { nullable: true })
  @JoinColumn({ name: 'order_id' })
  order?: OrderEntity;

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;

  @DeleteDateColumn()
  deleteAt?: Date;
}
