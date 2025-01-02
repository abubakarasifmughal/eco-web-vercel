import { ReactNode } from "react";

export function CanvasLayout({
  children,
  leftPanel,
  rightPanel,
}: {
  children: ReactNode;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}) {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="min-w-[200pt] dark:bg-[#151520] text-white">
        {leftPanel}
      </div>
      <div className="flex-1 bg-black">{children}</div>
      <div className="min-w-[200pt] dark:bg-[#151520] text-white">
        {rightPanel}
      </div>
    </div>
  );
}
