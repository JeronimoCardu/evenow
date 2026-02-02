import useAuth from "../hooks/useAuth";
import { logoutToAPI } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const currentUser = useAuth((state) => state.userData);
  const clearUserData = useAuth((state) => state.clearUserData);

  const handleLogout = async () => {
    await logoutToAPI();
    clearUserData();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">User {currentUser?.name}</h1>
      <p>
        This is the profile page. User details and settings will be displayed
        here.
      </p>
      <button
        onClick={() => {
          handleLogout();
          navigate("/login");
        }}
        className="mt-6 rounded-lg border border-red-500 px-2"
      >
        Log Out
      </button>
    </div>
  );
}
