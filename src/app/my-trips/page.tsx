"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Prisma, TripReservation } from "@prisma/client";
import UserReservationItem from "./components/UserReservationItem";
import Button from "@/components/Button";
import Link from "next/link";

function MyTrips() {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]);

  const { status, data } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" || !data?.user) {
      return router.push("/");
    }

    const fetchReservations = async () => {
      const response = await fetch(
        `http://localhost:3000/api/user/${(data?.user as any)?.id}/reservations`
      );
      const json = await response.json();

      setReservations(json);
    };
    fetchReservations();
  }, [status, data, router]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDarker text-xl">
        Minhas Viagens
      </h1>
      {reservations.length > 0 ? (
        reservations?.map((reservation) => (
          <UserReservationItem key={reservation.id} reservation={reservation} />
        ))
      ) : (
        <div className="flex flex-col">
          <p className=" mt-3 font-medium text-primaryDarker">
            Você ainda não tem nenhuma reserva! =(
          </p>

          <Link href="/">
            <Button className="w-full mt-4">Fazer reserva</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyTrips;
