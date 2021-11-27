const initialState = [
  {
    id: 1,
    title: "Go to Library",
    status: true,
  },
  {
    id: 2,
    title: "Have Lunch",
    status: true,
  },
  {
    id: 3,
    title: "Meet friends",
    status: true,
  },
];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todoData];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, status: !todo.status } : todo
      );
    default:
      return state;
  }
};
export default todoReducer;
