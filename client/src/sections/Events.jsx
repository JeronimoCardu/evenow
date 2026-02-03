import SearchEvent from "../components/SearchEvent";
import EventCard from "../components/EventCard";
import useStore from "../hooks/useStore";
import { useEffect } from "react";

import { getAllEventsFromAPI } from "../api/events";

export default function Events() {
  const setLoading = useStore((state) => state.setLoading);
  const setEvents = useStore((state) => state.setEvents);
  const events = useStore((state) => state.events);
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);

  useEffect(() => {
    async function fetchEvents() {
      console.log(searchTerm);
      try {
        setEvents(await getAllEventsFromAPI());
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, [searchTerm]);
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
        {(searchTerm.search || searchTerm.category ||
          searchTerm.month ||
          searchTerm.sortPrice !== "up-down") && (
          <button
            onClick={() =>
              setSearchTerm({
                search: "",
                category: "",
                month: "",
                sortPrice: "up-down",
              })
            }
            className="bg-aqua hover:bg-aqua/80 rounded px-4 py-2 text-white mx-auto block mt-2 mb-4 shadow-lg shadow-dark/20"
          >
            Limpiar filtros
          </button>
        )}
      </div>
      <div className="px-2">
        {events.length > 0 ? (
          events
            .filter((event) => {
              const search = searchTerm.search.toLowerCase();

              const matchSearch =
                !search ||
                event.title.toLowerCase().includes(search) ||
                event.description.toLowerCase().includes(search) ||
                event.location.toLowerCase().includes(search);

              const matchCategory =
                !searchTerm.category ||
                event.category.includes(searchTerm.category);

              const matchMonth =
                !searchTerm.month ||
                new Date(event.date).getMonth() + 1 ===
                  parseInt(searchTerm.month, 10);

              return matchSearch && matchCategory && matchMonth;
            })
            .sort((a, b) => {
              if (searchTerm.sortPrice === "up-down") {
                return a.price - b.price;
              }
              if (searchTerm.sortPrice === "down-up") {
                return b.price - a.price;
              }
              return 0;
            })
            .map((event) => <EventCard key={event._id} eventData={event} />)
        ) : (
          <p className="text-center">No hay eventos disponibles.</p>
        )}
      </div>
    </section>
  );
}

{
  /* <EventCard key={event._id} eventData={event} /> */
}
