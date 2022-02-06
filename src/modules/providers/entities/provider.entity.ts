import { ProductEntity } from 'src/modules/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'provider' })
export class ProviderEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  contactname!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  direction!: string;

  @Column({
    nullable: true,
    name: 'product_id',
    type: 'text',
  })
  productId?: string;

  @OneToOne(() => ProductEntity, (product) => product.provider, {
    nullable: true,
  })
  @JoinColumn({ name: 'pruduct_id' })
  product?: ProductEntity;

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;

  @DeleteDateColumn()
  deleteAt?: Date;
}
