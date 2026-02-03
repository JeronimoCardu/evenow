import SearchEvent from "../components/SearchEvent";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import useStore from "../hooks/useStore";
import { useEffect } from "react";

import { getAllEventsFromAPI } from "../api/events";

export default function Events() {
  const setLoading = useStore((state) => state.setLoading);
  const setEvents = useStore((state) => state.setEvents);
  const events = useStore((state) => state.events);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setEvents(await getAllEventsFromAPI());
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);
  return (
    <section className="pt-8" id="eventos">
      <div className="px-4">
        <h1 className="mb-6 text-center font-[firaSansBold] text-3xl">
          <strong className="text-aqua">Buscá</strong> a donde queres ir
        </h1>
        <p>
          Podes buscar tu evento ideal o usar los filtros para refinar tu
          búsqueda!
        </p>
        <SearchEvent />
      </div>
      <div className="px-2">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event._id} eventData={event} />)
        ) : (
          <p className="text-center">No hay eventos disponibles.</p>
        )}
      </div>
    </section>
  );
}
