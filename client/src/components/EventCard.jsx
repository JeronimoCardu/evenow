export default function EventCard({ eventData }) {
  return (
    <div
      id={`event-${eventData.id}`}
      className="event-card mb-4 grid h-30 grid-cols-[30%_70%] overflow-hidden rounded-xl shadow-md"
    >
      <img
        className="h-full w-full object-cover"
        src={eventData.imageUrl}
        alt={eventData.title}
      />
      <div className="relative flex flex-col justify-between rounded-r-xl border border-l-0 border-gray-300 p-2">
        <div className="grid grid-cols-[60%_40%]">
          <h2 className="truncate text-lg font-bold">{eventData.title}</h2>
          <p className="pr-2 text-right text-sm text-gray-500">
            {eventData.date}
            <br />
            {eventData.time}
          </p>
        </div>
        <div className="grid grid-cols-[60%_40%] items-end">
          <p className="line-clamp-2 text-gray-400">{eventData.location}</p>
          <p className="text-aqua text-right font-[firaSansBold] text-xl">
            ${eventData.price}
          </p>
        </div>
      </div>
    </div>
  );
}
