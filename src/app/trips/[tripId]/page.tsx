import { prisma } from "@/lib/prisma";
import TripHeader from "./components/TripHeader";

async function getTripDetails(tripId: string) {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
}

async function TripDetails({ params }: { params: { tripId: string } }) {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      {/* CAMPOS RESERVA */}
    </div>
  );
}

export default TripDetails;
