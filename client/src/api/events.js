const API_URL = import.meta.env.VITE_API_URL;

export const getAllEventsFromAPI = async () => {
  try {

    const response = await fetch(`${API_URL}/api/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

export const getEventByIdFromAPI = async (eventId) => {
  try {
    const response = await fetch(`${API_URL}/api/events/${eventId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching event by ID:", error);
  }
};

export const createEventToAPI = async (eventData) => {
  try {
    const response = await fetch(`${API_URL}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
      credentials: "include",
    });
    return response.json();
  } catch (error) {
    console.error("Error creating event:", error);
  }
};

export const buyTicketToAPI = async (currentEvent, userData) => {
  try {
    const response = await fetch(
      `${API_URL}/api/users/${userData._id}/attend`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: currentEvent._id,
        }),
        credentials: "include",
      },
    );
    return response.json();
  } catch (error) {
    console.error("Error buying ticket:", error);
  }
};
