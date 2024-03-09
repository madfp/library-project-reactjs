import { buttonVariants } from "@/components/ui/button";
import Books from "../../assets/Books.svg";
import Writing from "../../assets/Writings.svg";
import Stars from "../../assets/Stars.svg";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MoveUpRight } from "lucide-react";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center h-[100vh] md:h-[100vh] md:px-16 text-center text-black bg-[url(/DarkBookShelf.webp)] bg-cover bg-center">
        <h1 className="text-3xl md:text-5xl font-black text-white lg:max-w-[80%]">
          Más que una biblioteca, una comunidad de lectores.
        </h1>
        <p className="max-w-[90%] lg:max-w-[50%] text-lg text-white font-bold mt-4 bg-black rounded bg-opacity-60">
          Bienvenido a la comunidad de lectores más grande de la web. Comparte y
          descubre las recomendaciones de otros usuarios, califica y comparte
          tus opiniones.
        </p>
        <div className="max-w-[70%] mx-auto md:mx-0 lg:max-w-[50%] grid grid-cols-2 gap-2 mt-8">
          <a
            className={`${buttonVariants({
              variant: "secondary",
            })} hover:cursor-pointer`}
            href="/iniciar-sesion"
          >
            Ingresar gratis
          </a>
          <a
            className={`${buttonVariants({
              variant: "secondary",
            })} hover:cursor-pointer`}
            href="/sobre-nosotros"
          >
            Mas información
          </a>
        </div>
      </section>
      {/* Features section */}
      <section className="w-full lg:h-[80vh] mt-24 px-4 md:px-12 gap-6 flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="md:max-w-[40%]">
          <h1 className="text-4xl font-black">Comparte tus recomendaciones</h1>
          <Separator className="mt-2 mb-6" />
          <p className="my-4">
            Accede a todas las categorias de generos literarios y comparte tus
            recomendaciones con la comunidad.
          </p>
          <div className="mt-4 space-x-4">
            <a className={`${buttonVariants({ variant: "default" })}`}>
              Ver libros
            </a>
            <a className={`${buttonVariants({ variant: "outline" })}`}>
              Publicar recomendación{" "}
            </a>
          </div>
          <div className="mt-24 space-y-2 space-x-1">
            <Badge
              variant={"outline"}
              className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 hover:bg-[#191723] hover:text-white"
            >
              Literatura
            </Badge>
            <Badge
              variant={"outline"}
              className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 hover:bg-[#191723] hover:text-white"
            >
              Ciencia ficción
            </Badge>
            <Badge
              variant={"outline"}
              className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 hover:bg-[#191723] hover:text-white"
            >
              Terror
            </Badge>
            <Badge
              variant={"outline"}
              className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 hover:bg-[#191723] hover:text-white"
            >
              Ciencia
            </Badge>
            <Badge
              variant={"outline"}
              className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 hover:bg-[#191723] hover:text-white"
            >
              Historia
            </Badge>
            <Badge
              variant={"outline"}
              className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 hover:bg-[#191723] hover:text-white"
            >
              Mejora personal
            </Badge>
            <Badge
              variant={"outline"}
              className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 hover:bg-[#191723] hover:text-white"
            >
              Romance
            </Badge>
            <Badge
              variant={"outline"}
              className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 hover:bg-[#191723] hover:text-white"
            >
              Misterio
            </Badge>
          </div>
        </div>
        <div className="hidden md:grid h-full w-full md:w-[60%] grid-cols-1 md:grid-cols-4 grid-rows-5 gap-3">
          <div className="w-full md:col-span-4 row-span-3 bg-slate-200 bg-[url(/MysticalBooks.webp)] bg-center bg-cover rounded-lg"></div>
          <div className="border md:col-span-2 bg-slate-100 md:row-span-2 relative rounded-lg p-2">
            <h2 className="text-2xl font-bold mt-4">
              Mira los libros con más recomendaciones
            </h2>
            <p className="mt-2 px-1">
              Accede a nuestros servicios y descubre los libros más recomendados
              por la comunidad.
            </p>
            <a
              href="/libros"
              className="p-1 absolute top-2 right-2 bg-gray-300 rounded-full hover:scale-110 transition-all duration-300"
            >
              <MoveUpRight />
            </a>
          </div>
          <div className="bg-[url(/MysteryBookCircle.webp)] bg-center bg-cover bg-no-repeat md:col-span-2 row-span-2 rounded-lg p-2"></div>
        </div>
      </section>

      {/* New section idea */}
      <section className="my-32 md:h-[70vh] px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 place-items-center w-full">
        <div className="flex flex-col bg-[#191723] text-white h-full w-full lg:rounded-tl-lg md:rounded-bl-lg rounded-tl-lg rounded-tr-lg md:rounded-tr-none">
          <div className="flex flex-wrap justify-between items-center px-4 pt-6 lg:pl-8 lg:pr-10 lg:mt-8 w-full">
            <span className="text-2xl font-bold mb-2">
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
          <div className="mt-4 md:mt-8 mb-8 px-4 lg:px-6">
            <h2 className="text-3xl lg:text-5xl font-black">Libros en línea</h2>
            <p className="lg:max-w-[80%] mt-4 text-lg font-semibold">
              Tu libreria de confianza a un click de distancia. Recomendaciones
              y reseñas de libros de todos los géneros literarios en un solo
              lugar. Crea tus propias listas de libros, comparte tus opiniones y
              descubre nuevas lecturas.
            </p>
            <div className="flex flex-wrap justify-left items-center gap-3 mt-8 md:mt-12">
              <Badge
                variant={"default"}
                className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 bg-red-900 rounded-md"
              >
                Lorem ipsum
              </Badge>
              <Badge
                variant={"default"}
                className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 bg-green-900 rounded-md"
              >
                Lorem ipsum
              </Badge>
              <Badge
                variant={"default"}
                className="py-2 px-4 text-md hover:cursor-pointer transition-color duration-500 bg-blue-900 rounded-md"
              >
                Lorem ipsum
              </Badge>
            </div>
          </div>
        </div>
        <img
          src="/BookShelf.webp"
          alt="BookShelf"
          className="rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-tr-lg md:rounded-br-lg h-full w-full"
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
