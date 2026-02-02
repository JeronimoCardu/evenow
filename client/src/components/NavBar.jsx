import { FaHome } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  return (
    <nav id="navbar" className="w-full">
      <div id="" className="flex items-center justify-between p-4 shadow-md">
        <Link to="/">
          <FaHome size={35} />
        </Link>
        <Link to="/profile">
          <FaUser size={30} />
        </Link>
      </div>
    </nav>
  );
}
