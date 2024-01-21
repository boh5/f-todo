import { useTodolistStore } from "@/store/todolistStore";
import dayjs from "dayjs";
import { groupBy, sortBy } from "lodash";
import { useMemo } from "react";

export default function useGroupTodolist() {
  /**
   * 分组 todolist
   */
  const todoList = useTodolistStore((state) => state.list);

  const { notCompleted, completed } = useMemo(() => {
    const groupedIsCompleted = groupBy(todoList, (item: TodoTypes.TTodo) => {
      return item.completed ? "completed" : "notCompleted";
    });

    const groupedTodo = groupBy(
      groupedIsCompleted["notCompleted"],
      (item: TodoTypes.TTodo) => {
        if (!item.deadline) {
          return "other";
        }
        const deadline = dayjs(item.deadline);
        if (deadline.isSame(dayjs(), "day")) {
          const hour = deadline.hour();
          if (hour < 12) {
            return "morning";
          } else if (hour < 18) {
            return "afternoon";
          } else {
            return "evening";
          }
        } else if (deadline.isBefore(dayjs(), "day")) {
          return "previous";
        } else {
          return "after";
        }
      },
    );

    const notCompleted = {
      today: {
        morning: sortBy(groupedTodo["morning"] || [], ["deadline"]),
        afternoon: sortBy(groupedTodo["afternoon"] || [], ["deadline"]),
        evening: sortBy(groupedTodo["evening"] || [], ["deadline"]),
      },
      previous: sortBy(groupedTodo["previous"] || [], ["deadline"]),
      later: sortBy(groupedTodo["after"] || [], ["deadline"]),
      other: sortBy(groupedTodo["other"] || [], ["updated_at"]),
    };

    const completed = sortBy(groupedIsCompleted["completed"] || [], [
      "updated_at",
    ]);

    return { notCompleted, completed };
  }, [todoList]);

  return { notCompleted, completed };
}
