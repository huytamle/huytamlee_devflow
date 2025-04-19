"use client";
import { buttonLinks, sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@/components/sign-out/signout-button";
const MediumSideNavigation = () => {
  //Choose URL:
  const pathname = usePathname();
  const userId = 1;
  return (
    <section className="hidden sm:max-lg:flex fixed top-16 left-0 w-22 h-[calc(100vh-64px)] background-light900_dark200 flex-col gap-2 pt-4 px-4 mt-4 ">
      {sidebarLinks.map((item, index) => {
        //Check Active Status:
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
            </Link>
          </div>
        );
      })}
      <div
        className={cn(userId ? "mt-20" : "mt-8 gap-4", "flex flex-col w-full")}
      >
        {userId ? (
          <SignOutButton name="" />
        ) : (
          <>
            {buttonLinks.map((item, index) => (
              <div
                key={index}
                className="gap-4 p-4 bg-transparent items-center flex justify-start "
              >
                <Link href={item.route}>
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default MediumSideNavigation;
