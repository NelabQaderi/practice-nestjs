import { Injectable } from '@nestjs/common';
import { title } from 'process';

const todos = [
  {
    id: 1,
    user: 'ali',
    title: 'practce',
    description: 'i must learn'
  },
  {
    id: 2,
    user: 'ahmad',
    title: 'practce',
    description: 'i must learn'
  },
  {
    id: 3,
    user: 'mahmod',
    title: 'practce',
    description: 'i must learn'
  }
]




@Injectable()
export class TodoService {
  getTodos() {
    return todos;
  }

  getTodo(id: string) {
    return
  }

}
