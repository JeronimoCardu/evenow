import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";

export default function SearchEvent() {
  const [openFilter, setOpenFilter] = useState(false);
  const [sortPrice, setSortPrice] = useState("up-down");

  // Close filter dropdown when clicking outside
  window.onclick = function (event) {
    if (!event.target.closest("#filter-element")) {
      setOpenFilter(false);
    }
  };

  return (
    <form className="focus-within:shadow-aqua/50 relative mx-auto my-5 flex items-center justify-between gap-2 rounded-md border border-gray-300 px-3 py-2 shadow-md focus-within:shadow-sm">
      <input
        name="filter"
        className="outline-0"
        type="text"
        placeholder="Search events..."
      />
      <button
        id="filter-element"
        type="button"
        onClick={() => setOpenFilter(!openFilter)}
        className="text-gray-600 hover:text-gray-800"
      >
        <FaFilter />
      </button>

      <div
        id="filter-element"
        className={`absolute top-full left-0 z-100 flex w-full flex-col items-start overflow-hidden rounded-b-xl bg-white p-4 text-center shadow-lg transition-all duration-700 ease-in-out ${openFilter ? "max-h-75 opacity-100" : "max-h-0 opacity-0"} `}
      >
        <select
          name="category"
          className="w-full border-b border-gray-200 py-2 outline-0"
          id="filter-element category"
        >
          <option value="">Categoria</option>
        </select>
        <select
          name="month"
          className="w-full border-b border-gray-200 py-2 outline-0"
          id="filter-element month"
        >
          <option value="">Mes</option>
        </select>
        <button
          id="filter-element"
          type="button"
          className="flex cursor-pointer items-center gap-2 pt-2 pl-1 text-gray-600 outline-0 hover:text-gray-800"
          onClick={() => {
            if (sortPrice === "up-down") setSortPrice("down-up");
            else setSortPrice("up-down");
          }}
        >
          Precio
          {sortPrice === "up-down" ? (
            <FaSortAmountDownAlt id="filter-element" />
          ) : (
            <FaSortAmountUp id="filter-element" />
          )}
        </button>
      </div>
    </form>
  );
}
