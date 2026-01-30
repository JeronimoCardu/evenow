import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import EventDetail from "./pages/EventDetail.jsx";

import Profile from "./pages/Profile.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";

import { handleGetProfile } from "./api/auth.js";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await handleGetProfile();
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchProfile();
  }, []);

  console.log("Current User:", currentUser);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* PROTECTED ROUTES */}
          <Route
            path="/profile"
            element={<Profile currentUser={currentUser} />}
          />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
