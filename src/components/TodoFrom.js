import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../actions/todo";
const TodoFrom = () => {
  const dispatch = useDispatch();
  const totalTodos = useSelector((store) => store.todo.length);
  const [title, setTitle] = useState("");
  const onSubmit = () => {
    dispatch(addTodoAsync({ title, status: true, id: totalTodos + 1 }));
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="submit"
        disabled={!title}
        value="Add Todo"
        onClick={onSubmit}
      />
    </div>
  );
};

export default TodoFrom;
