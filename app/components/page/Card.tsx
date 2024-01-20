export default function Card({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-[47%] justify-between my-2 p-2 bg-white dark:bg-gray-700 rounded-xl">
      <div className="flex justify-between items-center py-2">
        <div className="w-9 rounded-full">{icon}</div>
        <div className="text-3xl font-bold">10</div>
      </div>
      <div className="dark:text-gray-200 text-gray-500 font-semibold">
        {title}
      </div>
    </div>
  );
}
