import { Trip } from "@prisma/client";
import Image from "next/image";
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface TripHeaderProps {
  trip: Trip;
}

function TripHeader({ trip }: TripHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className="relative h-[280px] w-full">
        <Image
          src={trip?.coverImage}
          style={{ objectFit: "cover" }}
          fill
          alt={trip?.name}
        />
      </div>

      {/* TITULO E INFORMAÇÕES */}
      <div className="flex flex-col p-5">
        <h1 className="font-semibold text-xl text-primaryDarker">
          {trip.name}
        </h1>
        <div className="flex item-center gap-1 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-xs text-grayPrimary">{trip.location}</p>
        </div>
        <p className="text-xs text-grayPrimary">
          <span className="text-primary font-medium">
            R${trip.pricePerDay.toString()}
          </span>{" "}
          por dia
        </p>
      </div>
    </div>
  );
}

export default TripHeader;
