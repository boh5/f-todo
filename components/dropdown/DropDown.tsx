import clsx from "clsx";

export type DropDownItemData = {
  title: string;
  icon: React.ReactNode;
};

export default function DropDown({ items }: { items: DropDownItemData[] }) {
  return (
    <div className="bg-white rounded-xl shadow w-full z-50 p-1">
      {items.map((item, index) => (
        <DropDownItem
          key={item.title}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}

function DropDownItem({
  item,
  isLast,
}: {
  item: DropDownItemData;
  isLast: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex w-full justify-between items-center p-2",
        !isLast && "border-b",
      )}
    >
      {item.title}
      {item.icon}
    </div>
  );
}
