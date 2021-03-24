import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo-dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') todoId: number) {
    return this.todoService.findOne(todoId);
  }

  @Post()
  create(@Body() myTodo: CreateTodoDto) {
    return this.todoService.createTodo(myTodo);
  }

  @Patch(':id')
  update(@Param('id') myTodoId: number, @Body() myTodo: UpdateTodoDto) {
    return this.todoService.update(myTodoId, myTodo);
  }

  @Delete(':id')
  delete(@Param('id') todoId: number) {
    return this.todoService.deleteTodo(todoId);
  }
}
