"use client";

import Card from "@/app/components/page/Card";
import MyList from "@/app/components/page/MyList";
import useTodoCount from "@/hooks/todo-count";
import {
  CalendarDaysIcon,
  CalendarIcon,
  CheckCircleIcon,
  FlagIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const cards: {
  name: "today" | "plan" | "all" | "flag" | "done";
  href: string;
  title: string;
  icon: React.ReactNode;
}[] = [
  {
    name: "today",
    href: "/today",
    title: "今天",
    icon: <CalendarIcon className="text-white bg-blue-500 p-1 rounded-full" />,
  },
  {
    name: "plan",
    href: "#",
    title: "计划",
    icon: (
      <CalendarDaysIcon className="text-white bg-red-500 p-1 rounded-full" />
    ),
  },
  {
    name: "all",
    href: "/all",
    title: "全部",
    icon: <InboxIcon className="text-white bg-gray-500 p-1 rounded-full" />,
  },
  {
    name: "flag",
    href: "#",
    title: "旗标",
    icon: <FlagIcon className="text-white bg-orange-500 p-1 rounded-full" />,
  },
  {
    name: "done",
    href: "#",
    title: "完成",
    icon: (
      <CheckCircleIcon className="text-white bg-gray-500 p-1 rounded-full" />
    ),
  },
];

export default function PageBody() {
  const counts = useTodoCount();

  return (
    <div className="flex flex-col mt-4 space-y-2">
      <div className="flex flex-wrap justify-between">
        {cards.map((card) => (
          <Card
            key={card.name}
            title={card.title}
            icon={card.icon}
            href={card.href}
            count={counts[card.name]}
          />
        ))}
      </div>
      <MyList />
    </div>
  );
}
