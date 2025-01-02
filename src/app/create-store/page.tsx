"use client";

import Link from "next/link";
import { useState } from "react";

export default function Index() {
  const Colors = ["red", "blue", "green", "orange"];
  const [colors, setColors] = useState<string[]>([]);

  const onPressColors = (pressedColor: string) => {
    if (colors.includes(pressedColor)) {
      setColors(colors.filter((color) => color !== pressedColor));
    } else {
      setColors([...colors, pressedColor]);
    }
  };

  return (
    <div>
      <div>Choose color pallete</div>
      <div className="flex flex-row gap-3">
        {Colors.map((color) => (
          <div
            key={color}
            onClick={() => onPressColors(color)}
            className="cursor-pointer"
          >
            <div
              style={{ backgroundColor: color }}
              className="px-4 py-2 rounded-full"
            >
              {color}
            </div>
          </div>
        ))}
      </div>
      <div>Selected Pallete</div>
      <div>{JSON.stringify(colors)}</div>
      <Link
        href={"/template-selection"}
        className="text-blue-600 hover:underline"
      >
        Choose Template
      </Link>
    </div>
  );
}
