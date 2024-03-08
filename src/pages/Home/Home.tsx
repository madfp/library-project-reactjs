import { Button, buttonVariants } from "@/components/ui/button";
import Books from "../../assets/Books.svg";
import Writing from "../../assets/Writings.svg";
import Stars from "../../assets/Stars.svg";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center h-[95vh] md:h-[90vh] md:px-16 text-center text-black bg-[url(/DarkBookShelf.webp)] bg-cover bg-center">
        <h1 className="text-3xl md:text-5xl font-black text-white lg:max-w-[80%]">
          Más que una biblioteca, una comunidad de lectores.
        </h1>
        <p className="max-w-[90%] lg:max-w-[50%] text-white font-semibold mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam
          asperiores quidem quae vel, quasi fugit repellat! Magnam nisi, animi
          ducimus facilis repellendus.
        </p>
        <div className="max-w-[70%] mx-auto md:mx-0 lg:max-w-[50%] grid grid-cols-2 gap-2 mt-8">
          <Button color="default">Ingresar gratis</Button>
          <Button color="default">Mas información</Button>
        </div>
      </section>
      {/* Features section */}
      <section className="w-full h-[70vh] mt-32 px-4 md:px-32 gap-6 grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="bg-slate-200 h-full w-full rounded"></div>
        <div className="md:row-span-2 bg-slate-200 w-full h-full rounded"></div>
        <div className="bg-slate-200 w-full h-full rounded"></div>
      </section>
      <section className="my-20">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          nulla nesciunt doloremque magni, necessitatibus ducimus autem delectus
          sed cupiditate at, culpa, et est. Sint perferendis laborum dolorem,
          praesentium repellat ea.
        </p>
      </section>
      {/* New section idea */}
      <section className="mb-12 px-4 lg:px-20 grid grid-cols-1 md:grid-cols-2 place-items-center w-full">
        <div className="flex flex-col bg-[#191723] text-white h-full w-full lg:rounded-tl-lg lg:rounded-bl-lg rounded-tl-lg rounded-tr-lg lg:rounded-tr-none">
          <div className="flex flex-wrap justify-between items-center px-4 pt-6 lg:pl-8 lg:pr-10 lg:mt-8 w-full">
            <span className="text-2xl font-bold">
              Tu<span className="text-blue-400">Libreria</span>.com
            </span>
            <ul className="mt-4 lg:mt-0 flex gap-3 lg:gap-4">
              <li className="font-bold flex justify-center items-center gap-1 p-2 hover:cursor-pointer hover:bg-slate-700 rounded-md transition-color duration-300">
                <img src={Books} alt="Books icon" loading="lazy" />
                Libros
              </li>
              <li className="font-bold flex justify-center items-center gap-1 p-2 hover:cursor-pointer hover:bg-slate-700 rounded-md transition-color duration-300">
                <img src={Writing} alt="Writing icon" loading="lazy" />
                Reseñas
              </li>
              <li className="font-bold flex justify-center items-center gap-1 p-2 hover:cursor-pointer hover:bg-slate-700 rounded-md transition-color duration-300">
                <img src={Stars} alt="Star icon" loading="lazy" />
                Calificaciones
              </li>
            </ul>
          </div>
          <div className="mt-8 mb-12 px-4 lg:px-8">
            <h2 className="text-3xl lg:text-6xl font-black">Libros en línea</h2>
            <h3 className="text-xl font-bold my-3">
              Accede a las recomendaciones y reseñas de otros apasionados por la
              lectura.
            </h3>
          </div>
        </div>
        <img
          src="/BookShelf.webp"
          alt="BookShelf"
          className="rounded-bl-lg rounded-br-lg lg:rounded-bl-none lg:rounded-tr-lg lg:rounded-br-lg h-full w-full"
          loading="lazy"
        />
      </section>
      {/* Call to action */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Únete a la comunidad de lectores más grande
        </h2>
        <p className="px-4 md:max-w-[50%] md:mx-auto">
          Regístrate ahora y descubre una comunidad apasionada de lectores como
          tú. Obtén acceso a las reseñas del resto de los usuarios, comparte tus
          opiniones, interactúa y disfruta de una experiencia única en la
          plataforma.
        </p>
        <a
          href="/registrarme"
          className={`mt-4 ${buttonVariants({ variant: "default" })}`}
        >
          Registrarse gratis
        </a>
      </section>
    </>
  );
}

export default Home;
