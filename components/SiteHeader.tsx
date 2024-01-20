"use client";

import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

export default function SiteHeader() {
  return (
    <div className="flex justify-between">
      <div></div>
      <div>
        <button>
          <EllipsisHorizontalCircleIcon className="w-7 text-blue-700" />
        </button>
      </div>
    </div>
  );
}
