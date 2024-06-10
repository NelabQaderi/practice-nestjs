import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Todo module')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
   // localhost:5000/todo/get

   @Get('get/')
   getTodos() {
    return this . todoService.getTodos();  
   }

   @Get('get/:id')
   getTodo(@Param('id') id: string) {
    return id ;  
   }

}
