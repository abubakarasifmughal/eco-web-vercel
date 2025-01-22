import clsx from "clsx";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className={clsx("flex flex-row items-center bg-black p-12 h-screen")}>
      <Image
        src={"/assets/sign-searched-for.png"}
        height={4024}
        width={4024}
        alt="sign-searched-for"
        className="h-full object-cover w-3/5 rounded-3xl"
      />

      <div className="w-2/5 text-white h-full">
        <div
          className={clsx(
            "h-full w-full bg-[#151520]",
            "border border-[#3A384A] rounded-3xl p-4"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
