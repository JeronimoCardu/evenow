import { Link } from "react-router-dom";
export default function Register() {
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
      <form className="mx-auto flex w-3/4 flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            className="mt-1 border-b px-1 outline-0"
            type="text"
            id="name"
            name="name"
            required
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
          />
        </div>
        <button type="button" className="rounded bg-blue-500 py-2 text-white">
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
