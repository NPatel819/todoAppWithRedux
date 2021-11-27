export const addTodoAsync = (todoItem) => {
  return {
    type: "ADD_TODO",
    todoData: todoItem,
  };
};
export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id: id,
  };
};
