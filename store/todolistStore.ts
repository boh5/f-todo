import { create } from "zustand";

export const initialTodo: TodoTypes.TTodo = {
  id: 0,
  title: "",
  comment: "",
  url: "",
  completed: false,
  deadline: "",
  created_at: "",
  updated_at: "",
};

type TodolistState = {
  list: TodoTypes.TTodo[];
};

type TodolistAction = {
  setTodoList: (list: TodoTypes.TTodo[]) => void;
  addTodo: (todo: TodoTypes.TTodo) => void;
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
};

export const useTodolistStore = create<TodolistState & TodolistAction>(
  (set) => ({
    list: [],
    setTodoList: (list) => set({ list }),
    addTodo: (todo) => set((state) => ({ list: [...state.list, todo] })),
    removeTodo: (id) =>
      set((state) => ({ list: state.list.filter((todo) => todo.id !== id) })),
    completeTodo: (id) =>
      set((state) => ({
        list: state.list.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: true };
          }
          return todo;
        }),
      })),
  }),
);
