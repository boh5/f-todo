import clsx from "clsx";
import dayjs from "dayjs";

export default function TodoList({
  todoList,
}: {
  todoList: TodoTypes.TTodo[];
}) {
  return (
    <div>
      {todoList.map((todo, index) => (
        <div key={todo.id} className="my-2">
          <TodoListItem todo={todo} isLast={index === todoList.length - 1} />
        </div>
      ))}
    </div>
  );
}

function TodoListItem({
  todo,
  isLast,
}: {
  todo: TodoTypes.TTodo;
  isLast: boolean;
}) {
  return (
    <div className="flex space-x-2 h-full">
      <input className="h-5 w-5 mt-1 text-indigo-600" type="radio" />
      <div className={clsx("flex-1 h-full", !isLast && "pb-2 border-b")}>
        <p>{todo.title}</p>
        {todo.deadline && (
          <div
            className={clsx(
              "text-sm",
              dayjs(todo.deadline).isBefore(dayjs())
                ? "text-red-500"
                : " text-gray-500",
            )}
          >
            {todo.deadline && dayjs(todo.deadline).isSame(dayjs(), "day")
              ? dayjs(todo.deadline).format("今天 HH:mm")
              : dayjs(todo.deadline).format("YYYY/MM/DD HH:mm")}
          </div>
        )}
      </div>
    </div>
  );
}
