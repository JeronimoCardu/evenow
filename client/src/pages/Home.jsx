import Events from "../sections/Events";

export default function Home() {
  return (
    <>
      <section className="mt-18 mb-50 flex flex-col items-center px-4">
        <img
          className="my-4 drop-shadow-md drop-shadow-gray-400"
          src="/public/imgs/logo.png"
          alt="Evenow Logo"
        />
        <h1 className="mb-6 text-center font-[firaSansBold] text-5xl drop-shadow-xl drop-shadow-gray-300">
          Bienvenido
        </h1>
        <p className="mb-8 text-center font-[firaSansRegular] text-gray-700 drop-shadow-sm drop-shadow-gray-200">
          <strong>Asiste</strong> a eventos de forma{" "}
          <strong>facil y rapida</strong>. Busca el que más te guste, saca tu
          entrada y listo!
          <br />
          <span className="text-sm">También puedes crearlos! 😉</span>
        </p>
        <a
          href="#eventos"
          className="text-aqua shadow-aqua mx-auto w-fit rounded-lg bg-white px-6 py-3 font-semibold shadow-sm transition duration-300 hover:bg-gray-100 hover:shadow-md"
        >
          Buscar eventos
        </a>
      </section>
      <Events />
    </>
  );
}
