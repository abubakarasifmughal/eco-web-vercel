import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="h-full flex flex-col justify-center px-20 gap-5">
      <Image
        src={"/assets/logo.svg"}
        height={1024}
        width={1024}
        className="h-[90px] w-[90px]"
        alt="logo"
      />
      <div className="max-w-[400px] flex flex-col gap-4">
        <div>
          <div className="text-[#C2D1D9] text-[26px] font-semibold">
            Welcome to <span className="text-[#5659FF]">Shiphouse</span>!
          </div>
          <div className="text-[15px] text-[#C2D1D9]">
            Log in to your account to start planning your next shoot.
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] text-[#C2D1D9]">Email</label>
          <input
            type="email"
            className={clsx(
              "px-4 py-2 rounded-full border border-[#3A384A] ",
              "bg-transparent outline-none w-full text-[#C2D1D9] text-[13px]"
            )}
            placeholder="john.doe@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <label className="text-[13px] text-[#C2D1D9]">Password</label>
            <Link
              href={""}
              className="text-[#5659FF] text-[13px] font-semibold"
            >
              Forgot Password?
            </Link>
          </div>
          <input
            type="password"
            className={clsx(
              "px-4 py-2 rounded-full border border-[#3A384A] ",
              "bg-transparent outline-none w-full text-[#C2D1D9] text-[13px]"
            )}
            placeholder="************"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div
            className={clsx(
              "h-[18px] flex justify-between items-center",
              "border-2 aspect-square rounded-full border-[#C2D1D9]"
            )}
          >
            <div />
          </div>
          <div className="text-[15px] text-[#C2D1D9]">Remember Me</div>
        </div>
        <button className="h-[50px] bg-[#87888E] text-white rounded-full text-[15px] font-semibold">
          Sign in
        </button>
      </div>
    </div>
  );
}
