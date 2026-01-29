import { Link } from "react-router-dom";

export default function Login() {
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
      <form className="mx-auto flex w-3/4 flex-col gap-4">
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
          Ingresar
        </button>
      </form>
      <p className="text-center mt-4">
        ¿No tienes una cuenta? <Link to="/register" className='text-aqua underline'>Regístrate aquí</Link>
      </p>
    </section>
  );
}
