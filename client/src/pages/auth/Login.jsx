import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfileFromAPI, loginToAPI } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const initalValues = {
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initalValues);
  const setUserData = useAuth((state) => state.setUserData);
  const userData = useAuth((state) => state.userData);

  const handleLogin = async () => {
    try {
      await loginToAPI(formValues);
      await setUserData(await getProfileFromAPI());

      setFormValues(initalValues);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData]);

  return (
    <section className="mx-4">
      <img
        src="/public/imgs/logo.png"
        className="mx-auto w-3/4 drop-shadow-sm drop-shadow-gray-400"
        alt="Logo"
      />
      <h1 className="my-3 text-center font-[firaSansBold] text-3xl">
        Iniciar sesión
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="mx-auto flex w-3/4 flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Correo electrónico</label>
          <input
            className="mt-1 border-b px-1 outline-0"
            type="email"
            id="email"
            name="email"
            required
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Contraseña</label>
          <input
            className="mt-1 border-b px-1 outline-0"
            type="password"
            id="password"
            name="password"
            required
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
        </div>
        <button type="submit" className="rounded bg-blue-500 py-2 text-white">
          Ingresar
        </button>
      </form>
      <p className="mt-4 text-center">
        ¿No tienes una cuenta?{" "}
        <Link to="/register" className="text-aqua underline">
          Regístrate aquí
        </Link>
      </p>
    </section>
  );
}
