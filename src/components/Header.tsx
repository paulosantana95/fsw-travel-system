"use client";

import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  // Menu
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  // Auth
  const { status, data } = useSession();
  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <div className="relative h-[32px] w-[182px]">
        <Image src="/logo.png" alt="Full Stack Week" fill />
      </div>

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
            <div className="absolute top-14 left-0 w-full h-full bg-white  border-solid rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-xs font-semibold"
                onClick={handleLogoutClick}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
