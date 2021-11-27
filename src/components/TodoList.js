import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions/todo";
import store from "../store/configureStore";
const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => {
    return store.todo;
  });

  return (
    <div>
      {todoList.map((todoItem, index) => {
        return (
          <h1
            key={index}
            onClick={() => dispatch(toggleTodo(todoItem.id))}
            style={{ color: `${todoItem.status ? "green" : "black"}` }}
          >
            {todoItem.title}
          </h1>
        );
      })}
    </div>
  );
};

export default TodoList;
