const API_URL = import.meta.env.VITE_API_URL;

export const registerToAPI = async (user) => {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to register user");
    }
    return response.json();
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginToAPI = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    return response.json();
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getProfileFromAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/api/users/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return response.json();
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};

export const logoutToAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/api/users/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to logout");
    }
    return response.json();
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
