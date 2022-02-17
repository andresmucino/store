import { ProductEntity } from 'src/modules/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'provider' })
export class ProviderEntity {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id!: string;

  // issue for change name
  @Column({
    type: 'text',
    name: 'contect_name',
  })
  contactName!: string;

  @Column({
    type: 'text',
    name: 'email',
  })
  email!: string;

  @Column({
    type: 'text',
    name: 'phone',
  })
  phone!: string;

  @Column({
    type: 'text',
    name: 'direction',
  })
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
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'update_at',
  })
  updatedAt!: Date;

  @DeleteDateColumn({
    type: 'timestamp with time zone',
    name: 'delete_at',
    nullable: true,
  })
  deletedAt?: Date;
}
