import { OrderEntity } from 'src/orders/entity/order.entity';
import { ProviderEntity } from 'src/providers/entity/provider.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
} from 'typeOrm';

@Entity({ name: 'products' })
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

  @ManyToOne(() => OrderEntity, (order) => order.products, { nullable: true })
  order: OrderEntity;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
