"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";
export function SignOutButton({ name }: { name: string }) {
  return (
    <Button
      onClick={() => signOut()}
      type="submit"
      className="small-medium light-border-2 btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none cursor-pointer"
    >
      <Image
        src="/icons/computer.svg"
        alt="Log Out"
        width={20}
        height={20}
        className="item-center justify-center hidden sm:max-lg:flex"
      />
      <span className="primary-text-gradient">{name}</span>
    </Button>
  );
}
