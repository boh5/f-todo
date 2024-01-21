"use client";

import SiteHeader from "@/components/SiteHeader";
import { DropDownItemData } from "@/components/dropdown/DropDown";
import TodoList from "@/components/list/TodoList";
import useInitTodoList from "@/hooks/init-todo";
import { TGoBackData } from "@/types/types";
import {
  CheckCircleIcon,
  EyeIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";

const goBackData: TGoBackData = {
  title: "列表",
  href: "/",
};

const dropDownItems: DropDownItemData[] = [
  {
    title: "选择提醒事项",
    icon: <CheckCircleIcon className="w-5" />,
  },
  {
    title: "显示完成的项目",
    icon: <EyeIcon className="w-5" />,
  },
  {
    title: "打印",
    icon: <PrinterIcon className="w-5" />,
  },
];
export default function All() {
  const todoList = useInitTodoList();

  return (
    <div className="h-screen w-full dark:bg-zinc-900 bg-white text-black dark:text-white">
      <SiteHeader goBackData={goBackData} dropDownItems={dropDownItems} />
      <div className="space-y-2 px-4">
        <h1 className="text-3xl font-bold">全部</h1>
        <h2 className="text-xl font-bold text-orange-500">提醒</h2>
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
}
