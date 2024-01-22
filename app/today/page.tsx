"use client";

import PageFooter from "@/components/PageFooter";
import SiteHeader from "@/components/SiteHeader";
import { DropDownItemData } from "@/components/dropdown/DropDown";
import TodoList from "@/components/list/TodoList";
import useGroupTodolist from "@/hooks/group-todo";
import { TGoBackData } from "@/types/types";
import {
  CheckCircleIcon,
  EyeIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";

export const runtime = "edge";

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
export default function Today() {
  // 今天上午，下午，晚上的数据
  const { notCompleted } = useGroupTodolist();

  return (
    <div className="h-screen w-full dark:bg-zinc-900 bg-white text-black dark:text-white">
      <SiteHeader goBackData={goBackData} dropDownItems={dropDownItems} />
      <div className="space-y-2">
        <h1 className="text-3xl px-4 font-bold text-blue-500">今天</h1>
        <div className="px-4">
          <TodoList todoList={notCompleted.previous} />
        </div>
        <div className="w-full border-b bg-gray-300"></div>
        <div className="px-4">
          <h2 className="text-gray-500">上午</h2>
          <TodoList todoList={notCompleted.today.morning} />
        </div>
        <div className="w-full border-b bg-gray-300"></div>
        <div className="px-4">
          <h2 className="text-gray-500">下午</h2>
          <TodoList todoList={notCompleted.today.afternoon} />
        </div>
        <div className="w-full border-b bg-gray-300"></div>
        <div className="px-4">
          <h2 className="text-gray-500">今晚</h2>
          <TodoList todoList={notCompleted.today.evening} />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
