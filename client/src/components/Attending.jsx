import useAuth from "../hooks/useAuth.js";
import { useEffect } from "react";
import { getProfileFromAPI } from "../api/auth.js";

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
        <div key={index} className="mb-4 border-b pb-4">
          <h3>{event?.title}</h3>
          <p>{event?.date}</p>
          <img src={event?.imageUrl} width={200} />
          <p>${event?.price}</p>
        </div>
      ))}
    </section>
  );
}
