import { useEffect, useState } from "react";
import { buyTicketToAPI, getEventByIdFromAPI } from "../api/events";
import useStore from "../hooks/useStore";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { FaLocationDot, FaClock } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import useAuth from "../hooks/useAuth";

export default function EventDetail() {
  const { id } = useParams();
  const eventId = id;

  const setLoading = useStore((state) => state.setLoading);
  const currentEvent = useStore((state) => state.currentEvent);
  const setCurrentEvent = useStore((state) => state.setCurrentEvent);
  const userData = useAuth((state) => state.userData);
  const setUserData = useAuth((state) => state.setUserData);

  // Fetch event data on component mount
  useEffect(() => {
    async function fetchEventData() {
      try {
        setCurrentEvent(await getEventByIdFromAPI(eventId));
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEventData();
  }, [eventId, setCurrentEvent, setLoading]);

  // Handle ticket purchase
  const handleBuyTicket = async () => {
    try {
      // Prevent duplicate ticket purchases
      if (userData?.attendingEvents.includes(currentEvent._id)) {
        toast.info("¡Ya has comprado una entrada para este evento!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        throw new Error("User already attending this event");
      }
      // Proceed with ticket purchase
      const updatedUser = await buyTicketToAPI(currentEvent, userData);

      // Update user data in global state
      setUserData(updatedUser);
      toast.success("¡Entrada comprada con éxito!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error buying ticket:", error);
    }
  };

  // Check if the user has already bought a ticket for this event
  const isBought = userData?.attendingEvents.find(
    (event) => event._id === eventId,
  );

  return (
    <section className="my-6 px-4">
      <div>
        <h1 className="mb-6 text-center font-[firaSansBold] text-3xl">
          {currentEvent?.title}
        </h1>
        <img
          className="my-2 w-full rounded-lg"
          src={currentEvent?.imageUrl}
          alt={currentEvent?.title}
        />
        <p>{currentEvent?.description}</p>
      </div>
      <div className="my-4 flex flex-col gap-2">
        <p className="flex items-center gap-2">
          <FaClock />
          <span>{currentEvent?.date}</span> {currentEvent?.time}hs
        </p>
        <p className="flex items-center gap-2">
          <FaLocationDot />
          {currentEvent?.location}
        </p>
        {currentEvent?.price > 0 && (
          <p className="flex items-center gap-2">
            <MdAttachMoney />
            {currentEvent?.price}
          </p>
        )}
        <p className="flex items-center gap-2">
          <IoIosContact />
          {currentEvent?.organizer} - <strong>{currentEvent?.contact}</strong>
        </p>
        <p className="mt-4">
          {currentEvent?.category.map((cat) => (
            <span
              key={cat}
              className="mr-2 rounded-full border bg-gray-200 px-2 py-1 text-sm"
            >
              {cat}
            </span>
          ))}
        </p>
      </div>
      <div>
        <button
          disabled={!currentEvent || isBought}
          onClick={handleBuyTicket}
          className={`w-full rounded-lg px-6 py-3 font-semibold text-white transition duration-300 ${isBought ? "cursor-not-allowed bg-gray-400" : "bg-aqua shadow-dark"} `}
        >
          {!currentEvent
            ? "Cargando..."
            : isBought
              ? "Entrada Comprada"
              : currentEvent.price > 0
                ? "Comprar Entrada"
                : "Obtener Entrada Gratis"}
        </button>
      </div>
    </section>
  );
}
