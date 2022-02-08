import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({
    name: 'created_by_id',
    type: 'text',
  })
  createdById!: string;

  @Column({
    name: 'created_by',
    type: 'text',
  })
  createdBy!: string;

  @Column({
    name: 'updated_by_id',
    type: 'text',
  })
  updatedById!: string;

  @Column({
    name: 'updated_by',
    type: 'text',
  })
  updatedBy!: string;

  @Column({
    name: 'deleted_by_id',
    type: 'text',
    nullable: true,
  })
  deletedById!: string;

  @Column({
    name: 'deleted_by',
    type: 'text',
    nullable: true,
  })
  deletedBy!: string;

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;

  @DeleteDateColumn()
  deleteAt?: Date;
}
