"use client";

import PageBody from "@/app/components/page/PageBody";
import PageFooter from "@/app/components/page/PageFooter";
import Search from "@/app/components/page/Search";
import Overlay from "@/components/Overlay";
import SiteHeader from "@/components/SiteHeader";
import { DropDownItemData } from "@/components/dropdown/DropDown";
import useInitTodoList from "@/hooks/init-todo";
import { useSearchStore } from "@/store/searchStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PencilIcon, Square2StackIcon } from "@heroicons/react/24/outline";

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
      className="space-y-2 p-4 h-screen w-full dark:bg-zinc-900 bg-gray-100 text-black dark:text-white"
    >
      {!focused && <SiteHeader dropDownItems={dropDownItems} />}
      <div>
        <Search />
        <PageBody />
      </div>
      <PageFooter />
      {focused && <Overlay />}
    </div>
  );
}
