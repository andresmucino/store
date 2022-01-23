import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'providers' })
export class ProvidersEntity {
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

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
