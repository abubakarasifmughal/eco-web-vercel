import { BiSupport } from "react-icons/bi";
import { BsBox } from "react-icons/bs";
import { MdFactCheck } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { TbRectangleVertical } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { DraggableElement } from "./DraggableElement";
import { ITheme } from "@/types";

const BuilderRightPanel = ({ themes }: { themes: ITheme[] }) => {
  return (
    <div className="p-3 flex flex-col gap-5">
      <HeaderPane />
      <div className="flex flex-col gap-2">
        <DraggableElement
          title="Home"
          alias="Home"
          Icon={<AiOutlineHome size={19} className="text-neutral-300 ml-2" />}
        />
        <DraggableElement
          title="Services"
          alias="Services"
          Icon={<MdFactCheck size={19} className="text-neutral-300 ml-2" />}
        />
        <DraggableElement
          title="Product"
          alias="Product"
          Icon={<BsBox size={19} className="text-neutral-300 ml-2" />}
        />
        <DraggableElement
          title="Support"
          alias="Support"
          Icon={<BiSupport size={19} className="text-neutral-300 ml-2" />}
        />
        <div>-----</div>
        {themes
          .flatMap((theme) => theme.Elements)
          .map((element) => (
            <DraggableElement
              key={element.ID}
              title={element.TemplateName}
              alias={element.PathAlias}
              Icon={<BiSupport size={19} className="text-neutral-300 ml-2" />}
            />
          ))}
        <DraggableElement
          key={"__DropZone"}
          title={"Drag Zone"}
          alias={"__DropZone"}
          Icon={<BiSupport size={19} className="text-neutral-300 ml-2" />}
        />
        <DraggableElement
          key={"SearchBar"}
          title={"SearchBar"}
          alias={"SearchBar"}
          Icon={<BiSupport size={19} className="text-neutral-300 ml-2" />}
        />
        <DraggableElement
          key={"ProductList"}
          title={"ProductList"}
          alias={"ProductList"}
          Icon={<BiSupport size={19} className="text-neutral-300 ml-2" />}
        />
        <DraggableElement
          key={"Testimonials"}
          title={"Testimonials"}
          alias={"Testimonials"}
          Icon={<BiSupport size={19} className="text-neutral-300 ml-2" />}
        />
        <DraggableElement
          key={"AboutUs"}
          title={"AboutUs"}
          alias={"AboutUs"}
          Icon={<BiSupport size={19} className="text-neutral-300 ml-2" />}
        />
      </div>
      <button className="bg-[#5659FF] hover:bg-[#5653DD] active:bg-[#565ACC] w-full rounded-full py-2.5 flex flex-row justify-center gap-1">
        <AiOutlinePlus size={22} />
        <span>Add Page</span>
      </button>
    </div>
  );

  function HeaderPane() {
    return (
      <div className="bg-[#5659FF] p-2 flex flex-row items-center justify-center rounded-full gap-2">
        <TbRectangleVertical size={22} className="ml-2" />
        <div className="flex-1">Pages</div>
        <div className="bg-[#4F52EB] rounded-full p-1.5 hover:bg-neutral-600 cursor-pointer active:bg-neutral-800">
          <CgClose size={17} />
        </div>
      </div>
    );
  }
};

export default BuilderRightPanel;
