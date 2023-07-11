import Image from "next/image";
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

      <div className="flex w-full justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image width={38} height={38} src="/hotel-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">Resorts</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={38} height={38} src="/farm-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">Fazendas</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={38} height={38} src="/cottage-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">Chalés</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={38} height={38} src="/inn-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">Pousadas</p>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
