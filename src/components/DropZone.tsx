"use client";
import { DynamicRenderer } from "@/libs/dynamic-renderer";
import clsx from "clsx";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export function DropZone() {
  const [onDragZoneActive, setOnDragZoneActive] = useState(false);
  const [componentTree, setComponentTree] = useState<string[]>([]);

  const onReorder = (currentIndex: number, newIndex: number) => {
    const updatedTree = [...componentTree];
    const [removedElement] = updatedTree.splice(currentIndex, 1);
    updatedTree.splice(newIndex, 0, removedElement);
    setComponentTree(updatedTree);
  };

  return (
    <div className="text-white border border-neutral-700">
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
              <Renderer links={[]} />
              <div className="absolute top-0.5 right-0.5 flex flex-row gap-2 p-1 bg-black bg-opacity-35">
                <CgClose
                  color="white"
                  className="cursor-pointer hover:bg-red-500 mt-1"
                  onClick={() => {
                    setComponentTree((value) =>
                      value.filter((_element) => _element !== element)
                    );
                  }}
                />
                <div className="flex flex-col gap-1">
                  <IoChevronUp
                    className="cursor-pointer hover:bg-neutral-500"
                    color="white"
                    onClick={() => onReorder(index, index - 1)}
                  />
                  <IoChevronDown
                    className="cursor-pointer hover:bg-neutral-500"
                    color="white"
                    onClick={() => onReorder(index, index + 1)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        onDragOver={(e) => {
          e.preventDefault(); // Required to allow dropping
          // setOnDragZoneActive(true);
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
          "border-2 border-transparent p-4",
          onDragZoneActive && "border-blue-500",
        ])}
      >
        Drag here
      </div>
    </div>
  );
}
