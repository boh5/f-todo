import { useTodolistStore } from "@/store/todolistStore";
import { useEffect } from "react";

export default function useInitTodoList() {
  const todoList = useTodolistStore((state) => state.list);
  const setTodoList = useTodolistStore((state) => state.setTodoList);
  useEffect(() => {
    fetch("/fixtures/todo-list.json")
      .then((response) => response.json())
      .then((list) => setTodoList(list));
  }, [setTodoList]);

  return todoList;
}
