import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions/todo";
import store from "../store/configureStore";
const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => {
    return store.todo;
  });

  function onClick(e) {
    e.preventDefault();
    window.grecaptcha.ready(function () {
      window.grecaptcha.execute('6Le1V4AfAAAAAD13bv3iGErKEzQKzbeSiem4gw1G', { action: 'submit' }).then(function (token) {
        // Add your logic to submit to your backend server here.
        console.log(token)
      });
    });
  }

  return (
    <div>
      {todoList.map((todoItem, index) => {
        return (
          // <h1
          //   key={index}
          //   onClick={() => dispatch(toggleTodo(todoItem.id))}
          //   style={{ color: `${todoItem.status ? "green" : "black"}` }}
          // >
          //   {todoItem.title}
          // </h1>
          // <input type="text" name="email" onChange={()=>{setEmail()}} />
          <button class="g-recaptcha"
            data-sitekey="6Le1V4AfAAAAAD13bv3iGErKEzQKzbeSiem4gw1G"
            data-callback='onSubmit'
            data-action='submit'>Submit captch</button>
        );
      })}
    </div>
  );
};

export default TodoList;
