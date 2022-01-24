import { ProductEntity } from 'src/products/entity/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'provider' })
export class ProviderEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  contactname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  direction: string;

  @OneToOne(() => ProductEntity, (product) => product.provider, {
    nullable: true,
  })
  @JoinColumn({ name: 'pruduct_id' })
  product: ProductEntity;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
