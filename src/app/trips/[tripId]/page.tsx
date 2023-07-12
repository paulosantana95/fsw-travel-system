import { prisma } from "@/lib/prisma";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighlights from "./components/TripHighlights";

async function getTripDetails(tripId: string) {
  try {
    const trip = await prisma.trip.findUnique({
      where: {
        id: tripId,
      },
    });
    return trip;
  } catch (error) {
    // Lida com erros ocorridos durante a execução da consulta
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function TripDetails({ params }: { params: { tripId: string } }) {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation trip={trip} />
      <TripDescription description={trip.description} />
      <TripHighlights highlights={trip.highlights} />
    </div>
  );
}

export default TripDetails;
