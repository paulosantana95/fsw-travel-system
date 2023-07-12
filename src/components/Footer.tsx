import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-walterWhite p-5 justify-center flex flex-col items-center">
      <Image src="/logo.png" alt="Full Stack Week" width={133} height={23} />
      <p className="text-sm font-medium text-primaryDarker mt-1">
        Todos os direitos reservados.
      </p>
    </div>
  );
}

export default Footer;
