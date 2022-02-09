import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryColumn({type: 'text', name: 'id'})
  id!: string;

  @Column({
    name: 'email',
    type: 'text',
  })
  email!: string;

  @Column({
    name: 'password',
    type: 'text',
  })
  password!: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'time with time zone',
  })
  createAt!: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'time with time zone',
  })
  updateAt!: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'time with time zone',
  })
  deleteAt?: Date;
}
