import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/todo/entities/todo.entity';
import { UpdateTodoDto } from './dto/update-todo-dto';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async createTodo(todo: CreateTodoDto) {
    await this.todoRepository.save(todo);
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async update(id: number, todo: UpdateTodoDto) {
    const updateTodo = await this.todoRepository.findOne(id);
    updateTodo.title = todo.title;
    updateTodo.content = todo.content;
    await this.todoRepository.save(updateTodo);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
