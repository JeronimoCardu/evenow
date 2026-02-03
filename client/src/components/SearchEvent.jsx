import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";

import { categories } from "../data/categories";

import useStore from "../hooks/useStore";

export default function SearchEvent() {
  const [openFilter, setOpenFilter] = useState(false);
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);

  // Close filter dropdown when clicking outside
  window.onclick = function (event) {
    if (!event.target.closest("#filter-element")) {
      setOpenFilter(false);
    }
  };

  useEffect(() => {
    // Close filter when searchTerm changes
    setOpenFilter(false);
  }, [searchTerm]);

  return (
    <form className="focus-within:shadow-aqua/50 relative mx-auto my-5 grid grid-cols-[1fr_auto]  gap-2 rounded-md border border-gray-300 px-3 py-2 shadow-md focus-within:shadow-sm">
      <input
        name="filter"
        className="outline-0"
        type="text"
        placeholder="Search events..."
        value={searchTerm.search}
        onChange={(e) =>
          setSearchTerm({ ...searchTerm, search: e.target.value })
        }
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
          value={searchTerm.category}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, category: e.target.value })
          }
        >
          <option value="" disabled>
            Categoria
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          name="month"
          className="w-full border-b border-gray-200 py-2 outline-0"
          id="filter-element month"
          value={searchTerm.month}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, month: e.target.value })
          }
        >
          <option value="" disabled>
            Mes
          </option>
          {[...Array(12)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {new Date(0, index)
                .toLocaleString("es-ES", { month: "long" })[0]
                .toUpperCase() +
                new Date(0, index)
                  .toLocaleString("es-ES", { month: "long" })
                  .slice(1)}
            </option>
          ))}
        </select>
        <button
          id="filter-element"
          type="button"
          className="flex cursor-pointer items-center gap-2 pt-2 pl-1 text-gray-600 outline-0 hover:text-gray-800"
          onClick={() => {
            if (searchTerm.sortPrice === "up-down")
              setSearchTerm({ ...searchTerm, sortPrice: "down-up" });
            else setSearchTerm({ ...searchTerm, sortPrice: "up-down" });
          }}
        >
          Precio
          {searchTerm.sortPrice === "up-down" ? (
            <FaSortAmountDownAlt id="filter-element" />
          ) : (
            <FaSortAmountUp id="filter-element" />
          )}
        </button>
      </div>
    </form>
  );
}
