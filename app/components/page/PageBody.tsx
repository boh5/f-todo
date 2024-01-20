import Card from "@/app/components/page/Card";
import MyList from "@/app/components/page/MyList";
import {
  CalendarDaysIcon,
  CalendarIcon,
  CheckCircleIcon,
  FlagIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    name: "today",
    title: "今天",
    icon: <CalendarIcon className="text-white bg-blue-500 p-1 rounded-full" />,
  },
  {
    name: "plan",
    title: "计划",
    icon: (
      <CalendarDaysIcon className="text-white bg-red-500 p-1 rounded-full" />
    ),
  },
  {
    name: "all",
    title: "全部",
    icon: <InboxIcon className="text-white bg-gray-500 p-1 rounded-full" />,
  },
  {
    name: "flag",
    title: "旗标",
    icon: <FlagIcon className="text-white bg-orange-500 p-1 rounded-full" />,
  },
  {
    name: "done",
    title: "完成",
    icon: (
      <CheckCircleIcon className="text-white bg-gray-500 p-1 rounded-full" />
    ),
  },
];

export default function PageBody() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-wrap justify-between">
        {cards.map((card) => (
          <Card key={card.name} title={card.title} icon={card.icon} />
        ))}
      </div>
      <MyList />
    </div>
  );
}
