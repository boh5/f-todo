import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PageFooter() {
  return (
    <div className="fixed w-full bottom-0 left-0 right-0 p-4 text-blue-500">
      <div className="flex justify-between items-center">
        <button className="flex items-center space-x-2">
          <PlusCircleIcon className="w-7 fill-blue-500 text-white" />
          <span className="font-bold">新提醒事项</span>
        </button>
        <Link href="#">添加列表</Link>
      </div>
    </div>
  );
}
