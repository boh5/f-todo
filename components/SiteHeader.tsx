"use client";

import Overlay from "@/components/Overlay";
import DropDown, { DropDownItemData } from "@/components/dropdown/DropDown";
import { TGoBackData } from "@/types/types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  ChevronLeftIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader({
  goBackData,
  dropDownItems,
}: {
  goBackData?: TGoBackData;
  dropDownItems: DropDownItemData[];
}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <div className="flex justify-between w-full z-50 py-4 px-2">
      <div className="w-1/4">
        {goBackData && (
          <Link
            href={goBackData.href}
            className="flex items-center text-blue-700 space-x-1 active:text-blue-300 transition"
          >
            <ChevronLeftIcon className="w-5" />
            <p>{goBackData.title}</p>
          </Link>
        )}
      </div>
      <div ref={parent} className="relative w-3/4 flex z-50 justify-end">
        <button onClick={() => setShowDropDown(true)}>
          <EllipsisHorizontalCircleIcon
            className={clsx(
              "w-7 transition",
              showDropDown ? "text-blue-300" : "text-blue-700",
            )}
          />
        </button>
        {showDropDown && (
          <div className="absolute w-full top-9 -right-1hidden">
            <DropDown items={dropDownItems} />
          </div>
        )}
        {showDropDown && <Overlay onClick={() => setShowDropDown(false)} />}
      </div>
    </div>
  );
}
