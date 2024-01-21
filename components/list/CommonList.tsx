import { ChevronRightIcon, ListBulletIcon } from "@heroicons/react/24/outline";

export default function CommonList({
  iconBg,
  title,
  tip,
}: {
  iconBg?: "bg-blue-500" | "bg-orange-500";
  title: string;
  tip: string;
}) {
  return (
    <div className="flex justify-between items-center bg-white h-10 p-3 rounded-xl">
      <div className="flex space-x-2 items-center">
        {iconBg && (
          <ListBulletIcon
            className={`w-7 text-white p-1 rounded-full ${iconBg}`}
          />
        )}
        <div>{title}</div>
      </div>
      <div className="flex items-center space-x-2 text-gray-500">
        <div>{tip}</div>
        <ChevronRightIcon className="w-4" />
      </div>
    </div>
  );
}
