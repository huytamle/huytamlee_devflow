"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import ROUTES from "@/constants/route";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SignOutButton } from "@/components/sign-out/signout-button";

const FullSizeNavigation = () => {
  // Choose URL:
  const pathname = usePathname();
  const userId = 1; // For instance: UserId=1
  return (
    <section className="hidden lg:flex fixed top-16 left-0 w-60 h-[calc(100vh-64px)] background-light900_dark200 flex-col gap-2 pt-4 px-4 mt-4">
      {sidebarLinks.map((item, index) => {
        // Check Active Status:
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }
        return (
          <div key={index}>
            <Link
              href={item.route}
              className={cn(
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900",
                "flex items-center justify-start gap-4 bg-transparent p-4"
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={cn({ "invert-colors": !isActive })}
              />
              <span> {item.label}</span>
            </Link>
          </div>
        );
      })}
      <div
        className={cn(userId ? "mt-20" : "mt-8 gap-4", "flex flex-col w-full")}
      >
        {userId ? (
          <SignOutButton name="Log Out" />
        ) : (
          <>
            <Link href={ROUTES.SIGN_IN}>
              <Button className="small-medium light-border-2 btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none cursor-pointer">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </Link>
            <Link href={ROUTES.SIGN_UP}>
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none cursor-pointer">
                <span>Sign Up</span>
              </Button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default FullSizeNavigation;
