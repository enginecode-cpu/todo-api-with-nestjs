import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'todo', schema: 'todo' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 500 })
  content: string;
}
