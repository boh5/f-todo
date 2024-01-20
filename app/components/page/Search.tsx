"use client";

import { useSearchStore } from "@/store/searchStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";

export default function Search() {
  const focused = useSearchStore((state) => state.focused);
  const toggleFocused = useSearchStore((state) => state.toggleFocused);

  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <div ref={parent} className="flex justify-between space-x-1 items-center">
      <div className="w-full flex justify-between text-gray-500 bg-gray-200 dark:bg-gray-700 rounded-md px-2 space-x-2 h-9 items-center">
        <MagnifyingGlassIcon className="w-7" />
        <input
          className="w-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
          type="text"
          placeholder="搜索"
          onFocus={toggleFocused}
          onBlur={toggleFocused}
        />
        <MicrophoneIcon className="w-7" />
      </div>
      {focused && <div className="text-blue-700 w-20 text-center">取消</div>}
    </div>
  );
}
