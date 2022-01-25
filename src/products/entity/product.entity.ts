import { OrderEntity } from 'src/orders/entity/order.entity';
import { ProviderEntity } from 'src/providers/entity/provider.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeOrm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  image: string;

  @OneToOne(() => ProviderEntity, (provider) => provider.product, {
    nullable: true,
  })
  provider: ProviderEntity;

  @Column({
    nullable: true,
    name: 'order_id',
    type: 'text',
  })
  orderId: string;

  @ManyToOne(() => OrderEntity, (order) => order.products, { nullable: true })
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
