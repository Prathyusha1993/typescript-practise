import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../todoModel";
import { FaTrash } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

type Props = {
  todo: Todo;
  task: Todo[];
  setTask: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodoComp = ({ todo, task, setTask }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleCompleted = (id: number) => {
    setTask(
      task.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDeleteTodo = (id: number) => {
    setTask(task.filter((todo) => todo.id !== id));
  };
  const handleEditTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTask(
      task.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form className="todo__single" onSubmit={(e) => handleEditTodo(e, todo.id)}>
      {edit ? (
        <input
          className="todo__single__text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todo__single__text">{todo.todo}</s>
      ) : (
        <span className="todo__single__text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone){
                setEdit(!edit);
            } 
          }}
        >
          <FaPenSquare />
        </span>
        <span className="icon" onClick={() => handleDeleteTodo(todo.id)}>
          <FaTrash />
        </span>
        <span className="icon" onClick={() => handleCompleted(todo.id)}>
          <TiTick />
        </span>
      </div>
    </form>
  );
};

export default SingleTodoComp;
