"use client";
import { DynamicRenderer } from "@/libs/dynamic-renderer";
import clsx from "clsx";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

export function DropZone() {
  const [onDragZoneActive, setOnDragZoneActive] = useState(false);
  const [componentTree, setComponentTree] = useState<string[]>([]);

  return (
    <div className="text-white border border-neutral-700">
      <div
        onDragOver={(e) => {
          e.preventDefault(); // Required to allow dropping
          setOnDragZoneActive(() => true);
        }}
        onDragLeave={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const { clientX, clientY } = e;
          if (
            clientX < rect.left ||
            clientX > rect.right ||
            clientY < rect.top ||
            clientY > rect.bottom
          ) {
            setOnDragZoneActive(() => false);
          }
        }}
        onDrop={(e) => {
          e.preventDefault();
          setOnDragZoneActive(() => false);
          setComponentTree((value) => [
            ...value,
            e.dataTransfer.getData("text/plain"),
          ]);
        }}
        className={clsx([
          "hover:bg-blue-500 p-4",
          onDragZoneActive && "bg-blue-500",
        ])}
      >
        Drag here
      </div>
      <div className={clsx(componentTree.length ? "p-2" : "p-0")}>
        {componentTree.map((element, index) => {
          const Renderer = DynamicRenderer(element);
          return element === "__DropZone" ? (
            <div key={`${element}_SI_${index}`} className="relative">
              <DropZone />
              <CgClose
                color="white"
                className="cursor-pointer absolute top-2 right-2"
                onClick={() => {
                  setComponentTree((value) =>
                    value.filter((_element) => _element !== element)
                  );
                }}
              />
            </div>
          ) : (
            <div key={`${element}_SI_${index}`} className="relative">
              {!onDragZoneActive && <Renderer links={[]} />}
              <CgClose
                color="white"
                className="cursor-pointer absolute top-3 right-3"
                onClick={() => {
                  setComponentTree((value) =>
                    value.filter((_element) => _element !== element)
                  );
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
