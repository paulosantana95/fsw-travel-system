import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";
import React from "react";

async function getTrips() {
  try {
    const trips = await prisma.trip.findMany({});
    return trips;
  } catch (error) {
    // Lida com erros ocorridos durante a execução da consulta
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function RecommendedTrips() {
  const data = await getTrips();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="font-medium px-5 text-grayPrimary whitespace-nowrap">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex flex-col items-center mt-5 lg:mt-12 gap-5 lg:flex-row lg:gap-10 lg:flex-wrap lg:justify-center">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedTrips;
