import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './todoModel';
import TodoList from './components/TodoList';

const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [task, setTask] = useState<Todo[]>([]);
  const handleAddTodo = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTask([...task, {id:Date.now(), todo:todo, isDone: false}])
    }
    setTodo('');
  }

  return (
    <div className="App">
      <h4 className='heading'>Taskify</h4>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      {/* {task.map((todo) => (<li>{todo.todo}</li>))} */}
      <TodoList task={task} setTask={setTask} />
    </div>
  );
}

export default App;
