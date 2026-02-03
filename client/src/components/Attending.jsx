import useAuth from "../hooks/useAuth.js";
import { useEffect } from "react";
import { getProfileFromAPI } from "../api/auth.js";
import EventCard from "./EventCard.jsx";

export default function Attending() {
  const userData = useAuth((state) => state.userData);
  const setUserData = useAuth((state) => state.setUserData);

  useEffect(() => {
    const fetchAttendingEvents = async () => {
      try {
        await setUserData(await getProfileFromAPI());
      } catch (error) {
        console.error("Error fetching attending events:", error);
      }
    };
    fetchAttendingEvents();
  }, []);

  return (
    <section>
      {userData?.attendingEvents.map((event, index) => (
        <EventCard key={index} eventData={event} />
      ))}
    </section>
  );
}
