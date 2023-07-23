import Image from "next/image";
import Link from "next/link";
import React from "react";

function QuickSearch() {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="font-medium px-5 text-grayPrimary whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-between mt-5 lg:mt-10 lg:justify-center lg:gap-40">
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=hotel"
            className="flex flex-col items-center gap-1 hover:text-primary transition-all"
          >
            <Image width={38} height={38} src="/hotel-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Resorts</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=fazendas"
            className="flex flex-col items-center gap-1"
          >
            <Image width={38} height={38} src="/farm-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Fazendas</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=chales"
            className="flex flex-col items-center gap-1"
          >
            <Image width={38} height={38} src="/cottage-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Chalés</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=pousadas"
            className="flex flex-col items-center gap-1"
          >
            <Image width={38} height={38} src="/inn-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Pousadas</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
