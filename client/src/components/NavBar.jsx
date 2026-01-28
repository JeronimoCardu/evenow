import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [openNavBar, setOpenNavBar] = useState(false);
  console.log(openNavBar);
  // Close navbar when clicking outside
  window.addEventListener("click", function (event) {
    if (!event.target.closest("#navbar") && openNavBar) {
      setOpenNavBar(false);
    }
  });

  return (
    <nav id="navbar" className="w-full">
      <div id="" className="flex items-center justify-between p-4 shadow-md">
        <button type="button" onClick={() => setOpenNavBar(!openNavBar)}>
          <GiHamburgerMenu size={30} />
        </button>
        <Link to="/profile">
          <FaUser size={30} />
        </Link>
      </div>
      <div
        className={`overflow-hidden ${openNavBar ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} bg-light flex flex-col rounded-b-xl py-4 text-center shadow-md transition-all duration-300`}
      >
        <Link className="block py-2 focus:bg-gray-300" to="/">
          Home
        </Link>
        <Link className="block py-2 focus:bg-gray-300" to="/login">
          Iniciar sesión
        </Link>
      </div>
    </nav>
  );
}
