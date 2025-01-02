"use client";

import { MdDragIndicator } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

export function DraggableElement({
  title,
  Icon,
  alias,
}: {
  title: string;
  Icon: JSX.Element;
  alias: string;
}) {
  return (
    <div
      className="border border-neutral-700 px-1 rounded-md flex flex-row items-center py-2 pr-3 cursor-move"
      draggable
      id={alias}
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", alias);
      }}
    >
      <MdDragIndicator size={25} className="text-neutral-600" />
      {Icon}
      <span className="flex-1 ml-2 text-[15px] font-light text-[#C2D1D9]">
        {title}
      </span>
      <SlOptionsVertical size={16} className="text-[#C2D1D9]" />
    </div>
  );
}
