import React from 'react';
import { Todo } from '../todoModel';
import SingleTodoComp from './SingleTodoComp';

type Props = {
    task: Todo[];
    setTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({task, setTask}: Props) => {
  return (
    <div className='todos'>
      {task.map((todo) => (
        <SingleTodoComp todo={todo} key={todo.id} task={task} setTask={setTask} />
      ))}
    </div>
  )
}

export default TodoList;