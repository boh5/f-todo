import Overlay from "@/components/Overlay";
import CommonList from "@/components/list/CommonList";
import { initialTodo, useTodolistStore } from "@/store/todolistStore";
import clsx from "clsx";
import dayjs from "dayjs";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

export default function NewTodo({
  showState,
  setShowState,
}: {
  showState: boolean;
  setShowState: Dispatch<SetStateAction<boolean>>;
}) {
  const addTodo = useTodolistStore((state) => state.addTodo);

  const [formData, setFormData] = useState({
    title: "",
    comment: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    addTodo({
      ...initialTodo,
      id: Date.now(),
      title: formData.title,
      comment: formData.comment,
      created_at: dayjs().format(),
      updated_at: dayjs().format(),
    });
    setFormData({
      title: "",
      comment: "",
    });
    setShowState(false);
  };

  return (
    <div>
      {showState && <Overlay onClick={() => setShowState(false)} />}
      <form
        className={clsx(
          "fixed z-20 shadow-xl transition-all duration-700 h-1/2 p-4 bg-gray-100 left-0 rounded-t-xl w-full space-y-4",
          showState ? "bottom-0" : "-bottom-1/2",
        )}
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <button
            className="text-blue-500 transition active:text-blue-300"
            onClick={() => setShowState(false)}
          >
            取消
          </button>
          <h1 className="font-bold">新提醒事项</h1>
          <button
            type="submit"
            className="text-blue-500 transition active:text-blue-300 disabled:text-gray-400"
            disabled={!formData.title}
          >
            添加
          </button>
        </div>
        {/* Inputs */}
        <div className="bg-white pl-4 py-2 rounded-lg w-full space-y-2">
          <input
            className="w-full pr-4 leading-8 focus:outline-none"
            type="text"
            name="title"
            value={formData.title}
            placeholder="标题"
            onChange={(e) => handleChange(e)}
          />
          <div className="border-b"></div>
          <textarea
            name="comment"
            className="w-full pr-4 leading-8 focus:outline-none"
            rows={4}
            value={formData.comment}
            placeholder="备注"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <CommonList title="详细信息" tip="" />
        <CommonList iconBg="bg-orange-500" title="列表" tip="提醒" />
      </form>
    </div>
  );
}
