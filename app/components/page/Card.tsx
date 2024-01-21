"use client";
import { useRouter } from "next/navigation";

export default function Card({
  title,
  icon,
  href,
  count,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  count: number;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className="flex flex-col w-[47%] justify-between my-2 p-2 bg-white active:bg-gray-300 transition dark:bg-gray-700 rounded-xl"
    >
      <div className="flex justify-between items-center py-2">
        <div className="w-9 rounded-full">{icon}</div>
        <div className="text-3xl font-bold">{count}</div>
      </div>
      <div className="dark:text-gray-200 text-gray-500 font-semibold">
        {title}
      </div>
    </div>
  );
}
