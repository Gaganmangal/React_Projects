import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "Todo Massage",
      completed: false,
    },
  ],
  addTodo: (id) => {},
  updatedTodo: (id, todoMsg) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
