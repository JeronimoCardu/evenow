import { useState } from "react";
import { ClipLoader } from "react-spinners";
import useStore from "../hooks/useStore";

export default function Loading() {
  const loading = useStore((state) => state.loading);
  let [color, setColor] = useState("var(--color-aqua)");

  return (
    <div className="sweet-loading mx-auto fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50 pointer-events-none transition-opacity duration-300" style={{opacity: loading ? 1 : 0}}>
      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
