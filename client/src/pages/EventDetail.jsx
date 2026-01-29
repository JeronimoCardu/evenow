export default function EventDetail() {
  const path = window.location.pathname;
  const eventId = path.split("/").pop();

  return <div>EventDetail Page {eventId}</div>;
}
