"use client";

import PageBody from "@/app/components/page/PageBody";
import Search from "@/app/components/page/Search";
import Overlay from "@/components/Overlay";
import PageFooter from "@/components/PageFooter";
import SiteHeader from "@/components/SiteHeader";
import { DropDownItemData } from "@/components/dropdown/DropDown";
import useInitTodoList from "@/hooks/init-todo";
import { useSearchStore } from "@/store/searchStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PencilIcon, Square2StackIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const dropDownItems: DropDownItemData[] = [
  {
    title: "编辑列表",
    icon: <PencilIcon className="w-5" />,
  },
  {
    title: "模板",
    icon: <Square2StackIcon className="w-5" />,
  },
];
export default function Home() {
  const focused = useSearchStore((state) => state.focused);
  const [parent, enableAnimations] = useAutoAnimate();

  useInitTodoList();

  return (
    <div
      ref={parent}
      className="h-screen w-full dark:bg-zinc-900 bg-gray-100 text-black dark:text-white"
    >
      {!focused && <SiteHeader dropDownItems={dropDownItems} />}
      <div className={clsx("px-4", focused && "pt-4")}>
        <Search />
        <PageBody />
      </div>
      <PageFooter addList={true} />
      {focused && <Overlay />}
    </div>
  );
}
