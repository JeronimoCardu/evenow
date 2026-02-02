import { Link } from "react-router-dom";
import { useState } from "react";
import { loginToAPI, registerToAPI, getProfileFromAPI } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const initalValues = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};

export default function Register() {
  const [formValues, setFormValues] = useState(initalValues);
  const setUserData = useAuth((state) => state.setUserData);
  
  const navigate = useNavigate();
  
  const handleRegister = async () => {
    try {
      await registerToAPI(formValues); // Create the user first
      await loginToAPI({              // Then log them in
        email: formValues.email,
        password: formValues.password,
      });
      await setUserData(await getProfileFromAPI()); // Fetch and set user data

      setFormValues(initalValues);
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <section className="mx-4">
      <img
        src="/public/imgs/logo.png"
        className="mx-auto w-3/4 drop-shadow-sm drop-shadow-gray-400"
        alt="Logo"
      />
      <h1 className="my-3 text-center font-[firaSansBold] text-3xl">
        Registrarse
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
        className="mx-auto flex w-3/4 flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            className="mt-1 border-b px-1 outline-0"
            type="text"
            id="name"
            name="name"
            required
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname">Apellido</label>
          <input
            className="mt-1 border-b px-1 outline-0"
            type="text"
            id="lastname"
            name="lastname"
            required
            value={formValues.lastname}
            onChange={(e) =>
              setFormValues({ ...formValues, lastname: e.target.value })
            }
          />
        </div>
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
          Registrarse
        </button>
      </form>
      <p className="mt-4 text-center">
        Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-aqua underline">
          Inicia sesión aquí
        </Link>
      </p>
    </section>
  );
}
