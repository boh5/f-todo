import Overlay from "@/components/Overlay";
import CommonList from "@/components/list/CommonList";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

export default function NewTodo({
  showState,
  setShowState,
}: {
  showState: boolean;
  setShowState: Dispatch<SetStateAction<boolean>>;
}) {
  const [hasTitle, setHasTitle] = useState(false);

  return (
    <div>
      {showState && <Overlay onClick={() => setShowState(false)} />}
      <div
        className={clsx(
          "fixed z-20 shadow-xl transition-all duration-700 h-1/2 p-4 bg-gray-100 left-0 rounded-t-xl w-full space-y-4",
          showState ? "bottom-0" : "-bottom-1/2",
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <button
            className="text-blue-500 transition active:text-blue-300 disabled:text-gray-300"
            onClick={() => setShowState(false)}
          >
            取消
          </button>
          <h1 className="font-bold">新提醒事项</h1>
          <button
            className="text-blue-500 disabled:text-gray-400"
            disabled={!hasTitle}
          >
            添加
          </button>
        </div>
        {/* Inputs */}
        <div className="bg-white pl-4 py-2 rounded-lg w-full space-y-2">
          <input
            className="w-full pr-4 leading-8 focus:outline-none"
            type="text"
            placeholder="标题"
            onInput={(e) => {
              if (e.currentTarget.value) {
                setHasTitle(true);
              } else {
                setHasTitle(false);
              }
            }}
          />
          <div className="border-b"></div>
          <textarea
            className="w-full pr-4 leading-8 focus:outline-none"
            rows={4}
            placeholder="备注"
          />
        </div>
        <CommonList title="详细信息" tip="" />
        <CommonList iconBg="bg-orange-500" title="列表" tip="提醒" />
      </div>
    </div>
  );
}
