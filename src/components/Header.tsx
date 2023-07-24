"use client";

import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

function Header() {
  // Menu
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  // Auth
  const { status, data } = useSession();
  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center lg:border-b lg:border-grayLighter">
      <Link href="/">
        <div className="relative h-[32px] w-[182px]">
          <Image src="/logo.png" alt="Full Stack Week" fill />
        </div>
      </Link>

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border-grayLighter border rounded-full border-solid p-2 px-3 relative shadow-md">
          <AiOutlineMenu
            className="cursor-pointer"
            size={16}
            onClick={handleMenuClick}
          />

          <Image
            className="rounded-full shadow-md"
            width={35}
            height={35}
            src={data.user.image!}
            alt={data.user.name!}
          />

          {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-[100px] bg-white  border-solid rounded-lg shadow-md flex flex-col justify-center items-center">
              <Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
                <button className="text-primary text-xs pb-2 pt-2 border-b border-grayLighter border-solid font-semibold">
                  Minhas viagens
                </button>
              </Link>
              <button
                className="text-primary text-xs pt-2 border-solid font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
