import NewTodo from "@/components/NewTodo";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function PageFooter({ addList }: { addList?: boolean }) {
  const [showNewTodo, setShowNewTodo] = useState(false);

  return (
    <div className="fixed w-full bottom-0 left-0 right-0 p-4">
      <div className="flex justify-between items-center text-blue-500">
        <button
          className="flex items-center space-x-2"
          onClick={() => setShowNewTodo(true)}
        >
          <PlusCircleIcon className="w-7 fill-blue-500 text-white" />
          <span className="font-bold">新提醒事项</span>
        </button>
        {addList ? <Link href="#">添加列表</Link> : <div></div>}
      </div>
      <NewTodo showState={showNewTodo} setShowState={setShowNewTodo} />
    </div>
  );
}
