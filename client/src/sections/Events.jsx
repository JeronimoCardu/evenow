import SearchEvent from "../components/SearchEvent";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

export default function Events() {
  const eventData = [
    {
      id: 1,
      organizer: "RockNation",
      title: "Concierto de Rock - complejoaeropuerto",
      description: "Una noche llena de rock y buena música.",
      time: "20:00",
      date: "2024-07-15",
      location: "San Andres de Gdsadsadasdiles, Buenos Aires, Argentina",
      price: 250000,
      contact: "contacto@rocknation.com",
      category: ["Música", "Concierto"],
      guests: [{ name: "Banda Invitada" }, { name: "DJ Rock" }],
      imageUrl: "/public/imgs/image.png",
    },
    {
      id: 2,
      organizer: "RockNation",
      title: "Concierto de Rock",
      description: "Una noche llena de rock y buena música.",
      time: "20:00",
      date: "2024-07-15",
      location: "Buenos Aires, Argentina",
      price: 50,
      contact: "contacto@rocknation.com",
      category: ["Música", "Concierto"],
      guests: [{ name: "Banda Invitada" }, { name: "DJ Rock" }],
      imageUrl: "/public/imgs/image.png",
    },
    {
      id: 3,
      organizer: "RockNation",
      title: "Concierto de Rock",
      description: "Una noche llena de rock y buena música.",
      time: "20:00",
      date: "2024-07-15",
      location: "Buenos Aires, Argentina",
      price: 50,
      contact: "contacto@rocknation.com",
      category: ["Música", "Concierto"],
      guests: [{ name: "Banda Invitada" }, { name: "DJ Rock" }],
      imageUrl: "/public/imgs/image.png",
    },
  ];
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
        {eventData.map((event) => (
          <Link to={`/event/${event.id}`} key={event.id}>
            <EventCard eventData={event} />
          </Link>
        ))}
      </div>
    </section>
  );
}
