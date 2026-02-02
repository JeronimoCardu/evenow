import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import EventDetail from "./pages/EventDetail.jsx";

import Profile from "./pages/Profile.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";

import { getProfileFromAPI } from "./api/auth.js";

import useAuth from "./hooks/useAuth.js";
import useStore from "./hooks/useStore.js";

export default function App() {
  const setUserData = useAuth((state) => state.setUserData);
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfileFromAPI();
        setUserData(userData);
      } catch (error) {
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

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

          <Route path="*" element={<ProtectedRoutes />}>
            <Route path="profile" element={<Profile />} />
            <Route path="create-event" element={<CreateEvent />} />
          </Route>
          
        </Routes>
      </main>
      <Footer />
    </>
  );
}
