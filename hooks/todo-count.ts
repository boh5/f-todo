import useGroupTodolist from "@/hooks/group-todo";

export default function useTodoCount() {
  const { notCompleted, completed } = useGroupTodolist();
  const todayCount =
    notCompleted.today.morning.length +
    notCompleted.today.afternoon.length +
    notCompleted.today.evening.length +
    notCompleted.previous.length;
  const planCount = todayCount + notCompleted.later.length;
  const allCount = planCount + notCompleted.other.length;
  const flagCount = 0;
  const completedCount = completed.length;
  return {
    today: todayCount,
    plan: planCount,
    all: allCount,
    flag: flagCount,
    done: completedCount,
  };
}
