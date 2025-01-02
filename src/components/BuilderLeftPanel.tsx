"use client";
import { BsHeadset } from "react-icons/bs";
import { TbSocial } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { TbCircles } from "react-icons/tb";
import { TbRectangleVertical } from "react-icons/tb";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsLightningCharge } from "react-icons/bs";
import { BiDesktop } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import ArrowLeft from "@/icons/arrow-left";
import FooterIcon from "@/icons/footer-icon";
import SmallerBannerIcon from "@/icons/small-banner-icon";
import HeaderIcon from "@/icons/header-icon";
import TextWidgetIcon from "@/icons/text-widget-icon";
import SliderIcon from "@/icons/slider-icon";
import PhotoGridIcon from "@/icons/photo-grid-icon";
import ProductGalleryIcon from "@/icons/product-gallery-icon";

const BuilderLeftPanel = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <div>
      <div className="text-xs">Collapsed {JSON.stringify(isCollapsed)}</div>
      <PanelHeader />
      <div className="p-3 flex flex-col gap-3">
        <ClickableEntry
          Icon={<BsLightningCharge size={20} />}
          title="Template"
          onClick={() => {}}
          isActive={false}
        />
        <ClickableEntry
          Icon={<TbRectangleVertical size={20} />}
          title="Pages"
          onClick={() => {}}
          isActive={true}
        />
        <ClickableEntry
          Icon={<TbCircles size={20} />}
          title="Website Style"
          onClick={() => {}}
          isActive={false}
        />
        <ClickableEntry
          Icon={<HeaderIcon />}
          title="Header"
          onClick={() => {}}
          isActive={false}
        />
        <ClickableEntry
          Icon={<TextWidgetIcon />}
          title="Text Widget"
          onClick={() => {}}
          isActive={false}
          type="toggle"
        />
        <ClickableEntry
          Icon={<SliderIcon />}
          title="Slider"
          onClick={() => {}}
          isActive={false}
          type="toggle"
        />
        <ClickableEntry
          Icon={<BiCategory size={20} />}
          title="Category"
          onClick={() => {}}
          isActive={false}
          type="toggle"
        />
        <ClickableEntry
          Icon={<PhotoGridIcon />}
          title="Photo Grid"
          onClick={() => {}}
          isActive={false}
          type="toggle"
        />
        <ClickableEntry
          Icon={<ProductGalleryIcon />}
          title="Product Gallery"
          onClick={() => {}}
          isActive={false}
          type="toggle"
        />
        <ClickableEntry
          Icon={<SmallerBannerIcon />}
          title="Small Banner"
          onClick={() => {}}
          isActive={false}
          type="toggle"
        />
        <ClickableEntry
          Icon={<AiOutlineInfoCircle size={20} />}
          title="Info Section"
          onClick={() => {}}
          isActive={false}
          type="toggle"
        />
        <ClickableEntry
          Icon={<FooterIcon />}
          title="Footer"
          onClick={() => {}}
          isActive={false}
        />
        <ClickableEntry
          Icon={<TbSocial size={20} />}
          title="Social Media"
          onClick={() => {}}
          isActive={false}
        />
        <div className="mt-4">
          <span className="text-sm px-4 text-neutral-300">Need Help?</span>
        </div>
        <ClickableEntry
          Icon={<BsHeadset size={20} />}
          title="Support"
          onClick={() => {}}
          isActive={false}
        />
      </div>
    </div>
  );

  function PanelHeader() {
    return (
      <div className="flex flex-row justify-start items-center gap-3 bg-[#5659FF] p-4">
        <div className="bg-white p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <AiOutlineArrowLeft className="text-black" size={20} />
        </div>
        <div className="bg-white p-2 rounded-full hover:bg-gray-200 cursor-pointer px-3 min-w-[130pt]">
          <span className="text-black flex flex-row items-center gap-2 justify-center">
            <BiDesktop size={20} />
            <span>Web Builder</span>
          </span>
        </div>
        <span className="cursor-pointer">
          <ArrowLeft />
        </span>
      </div>
    );
  }
};

export default BuilderLeftPanel;

function ClickableEntry({
  Icon,
  isActive,
  onClick,
  title,
  type = "collapsable",
}: {
  Icon: JSX.Element;
  title: string;
  onClick: (newState?: boolean) => void;
  isActive: boolean;
  type?: "collapsable" | "toggle";
}) {
  const [isActiveState, setIsActiveState] = useState(isActive);

  return (
    <div
      className={`border px-3 py-2 rounded-full flex flex-row items-center gap-2 hover:bg-neutral-800 cursor-pointer active:bg-neutral-900 ${
        isActiveState && type === "collapsable"
          ? "border-[#5659FF] bg-[#5659FF] hover:bg-[#5659FF]"
          : "border-neutral-700 bg-[#151520] hover:bg-[#151520]"
      }`}
      onClick={() => {
        setIsActiveState((value) => !value);
        onClick(isActiveState);
      }}
    >
      {Icon}
      <span className="flex-1 text-[15px] font-light">{title}</span>

      {type == "collapsable" ? (
        <RiArrowRightSLine
          size={25}
          className={`text-[#C2D1D9] ${
            isActiveState ? "rotate-90" : "rotate-0"
          }`}
        />
      ) : (
        <ToggleSwitch isActive={isActiveState} />
      )}
    </div>
  );
}

function ToggleSwitch({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex flex-row">
      <div
        className={`border ${
          isActive
            ? "bg-[#5659FF] border-[#5659FF]"
            : "bg-black border-neutral-600"
        } p-0.5 rounded-full w-[25pt] flex flex-row`}
      >
        <div className={`${isActive ? "flex-1" : "flex-0"}`} />
        <div
          className={`aspect-square h-3 rounded-full ${
            isActive ? "bg-white" : "bg-[#87888E]"
          }`}
        />
      </div>
    </div>
  );
}
