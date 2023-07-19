"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import router from "next/router";
import { TripReservation } from "@prisma/client";
import { set } from "date-fns";

function MyTrips() {
  const [reservations, setReservations] = useState<TripReservation[]>([]);
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

  return <div>MyTrips</div>;
}

export default MyTrips;
