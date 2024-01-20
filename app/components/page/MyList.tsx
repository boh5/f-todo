import CommonList from "@/components/list/CommonList";

export default function MyList() {
  return (
    <div className="space-y-2">
      <h2 className="font-bold text-xl">我的列表</h2>
      <div className="flex flex-col gap-1">
        <CommonList iconBg="bg-orange-500" title="提醒" tip="28" />
        <CommonList iconBg="bg-blue-500" title="BOSS直聘" tip="0" />
      </div>
    </div>
  );
}
