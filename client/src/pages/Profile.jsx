import useAuth from "../hooks/useAuth";
import { logoutToAPI } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Attending from "../components/Attending";
import MyEvents from "../components/MyEvents";

export default function Profile() {
  const navigate = useNavigate();
  const currentUser = useAuth((state) => state.userData);
  const clearUserData = useAuth((state) => state.clearUserData);

  const [viewData, setViewData] = useState("PARTICIPATIONS");

  const handleLogout = async () => {
    await logoutToAPI();
    clearUserData();
  };
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Hola {currentUser.name} 👋</h1>
      <p>
        Gestioná tu información, controlá tus eventos y ajustá tu cuenta a tu
        manera. Todo lo que necesitás, en un solo lugar.
      </p>
      <section>
        <nav className="my-4 grid grid-cols-2 text-center text-lg font-medium">
          <div
            className={`${viewData === "PARTICIPATIONS" && "border-aqua!"} border-b-2 border-gray-300 pb-2`}
            onClick={() => setViewData("PARTICIPATIONS")}
          >
            <h2>Participaciones</h2>
          </div>
          <div
            className={`${viewData === "MY_EVENTS" && "border-aqua!"} border-b-2 border-gray-300 pb-2`}
            onClick={() => setViewData("MY_EVENTS")}
          >
            <h2>Mis Eventos</h2>
          </div>
        </nav>
        {viewData === "PARTICIPATIONS" ? <Attending /> : <MyEvents />}
      </section>
      <div className="flex w-full justify-center">
        <button
          onClick={() => {
            handleLogout();
            navigate("/login");
          }}
          className="rounded-lg border border-red-500 px-2 py-1 text-red-500 shadow-lg transition-colors hover:bg-red-500 hover:text-white"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
