import { GiFireBottle } from "react-icons/gi";
import { TbChecks } from "react-icons/tb";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiOutlineTablet } from "react-icons/ai";
import { GrMonitor } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";

export function Header() {
  return (
    <div className="bg-[#151520] border-[#3A384A] border-2 text-neutral-300 p-1.5 rounded-full flex flex-row gap-2 items-center">
      <div className="aspect-square h-[42px] bg-black rounded-full flex justify-center items-center">
        <GiFireBottle size={30} />
      </div>

      <div className="flex-1">
        <div className="text-[18] font-semibold tracking-wider">Own Hub</div>
        <div className="text-xs">www.owlhub.in</div>
      </div>
      <div className="bg-[#07060F] hover:bg-[#5659FF] p-2 rounded-full px-5 text-white font-medium text-[15px] tracking-wide flex flex-row items-center gap-2">
        <FaRegEye size={20} />
        Preview
      </div>
      <div className="bg-[#07060F] hover:bg-[#5659FF] p-2 rounded-full px-5 text-white font-medium text-[15px] tracking-wide flex flex-row items-center gap-2">
        Undo
      </div>
      <div className="bg-[#07060F] hover:bg-[#5659FF] p-2 rounded-full px-5 text-white font-medium text-[15px] tracking-wide flex flex-row items-center gap-2">
        Redo
      </div>
      <div className="bg-[#07060F] hover:bg-[#5659FF] p-2.5 rounded-full text-white font-semibold tracking-wide">
        <GrMonitor size={18} />
      </div>
      <div className="bg-[#07060F] hover:bg-[#5659FF] p-2.5 rounded-full text-white font-semibold tracking-wide">
        <AiOutlineTablet size={18} />
      </div>
      <div className="bg-[#07060F] hover:bg-[#5659FF] p-2.5 rounded-full text-white font-semibold tracking-wide">
        <IoPhonePortraitOutline size={18} />
      </div>
      <div className="h-6 w-1 rounded-full bg-white mx-2" />
      <div className="bg-[#07060F] hover:bg-[#5659FF] p-2 rounded-full px-5 text-white font-medium text-[15px] tracking-wide flex flex-row items-center gap-2">
        <HiOutlineRefresh size={20} />
        Reset
      </div>
      <div className="bg-[#5659FF] hover:bg-[#5659FF] p-2 rounded-full px-5 text-white font-medium text-[14px] tracking-wide flex flex-row items-center gap-2">
        <TbChecks size={20} />
        Publish
      </div>
    </div>
  );
}
