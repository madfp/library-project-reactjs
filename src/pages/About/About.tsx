import { buttonVariants } from "@/components/ui/button";

function About() {
  return (
    <>
      <section className="w-full h-[90vh] md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-6 text-center place-items-center md:text-left text-black">
        <div>
          <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-700 via-blue-400 to-indigo-700 inline-block text-transparent bg-clip-text">
            Más que una biblioteca, una comunidad de lectores.
          </h1>
          <p className="mt-4 font-semibold rounded-md">
            Únete a una comunidad de lectores apasionados, sube tus libros
            favoritos, organiza tu biblioteca personal y descubre nuevas
            recomendaciones. Comparte opiniones, interactúa con otros usuarios y
            disfruta de tu espacio único para la literatura. ¡Empieza a leer y
            conectar!
          </p>
          <a
            className={`mt-8 lg:w-[30%] mx-auto ${buttonVariants({
              variant: "default",
            })}`}
            href="/iniciar-sesion"
          >
            Ingresar gratis
          </a>
        </div>

        <div className="max-h-screen overflow-hidden hidden lg:block rounded-lg max-w-xl">
          <img src="/FantasyBookShelf.webp" alt="Book Banner" />
        </div>
      </section>
      <section className="my-8">
        <div className="px-4 md:px-12 mb-12">
          <h2 className="text-xl font-semibold mb-2 md:mb-4">
            Comparte tus recomendaciones de libros al resto de la comunidad
          </h2>
          <p className="lg:max-w-[70%]">
            El objetivo del proyecto{" "}
            <span className="font-bold">TuLibreria.com</span> es unir a las
            personas que comparten los mismos intereses literarios, desde leer
            tu saga favorita, hasta conseguir una nueva recomendación para leer
            un libro de superación personal.{" "}
            <span className="font-bold">TuLibreria.com</span> Ofrece un espacio
            para que todos los amantes de la lectura hagan sus recomendaciones,
            realicen comentarios sobre las recomendaciones del resto y puedan
            conseguir nuevas
          </p>
        </div>

        <div className="px-4 md:px-12">
          <h2 className="text-xl font-semibold mb-2 md:mb-4">
            Ayuda a los demás a descubrir su pasión por la lectura
          </h2>
          <p className="lg:max-w-[70%]">
            En <span className="font-bold">TuLibreria.com</span> tenemos la gran
            convicción de que todas las personas que afirman que no les gusta la
            lectura, tienen un mundo por descubrir, que tan solo con abrir un
            nuevo libro, comienzan a llegar todas las oportunidades de aprender
            y cultivar nuestra imaginación por medio de la lectura.
          </p>
        </div>
        <div className="mt-12 px-4 md:px-12">
          <h2 className="text-xl font-semibold mb-2 md:mb-4">
            Conoce a más personas que comparten los mismos intereses literarios
            que tu
          </h2>
          <p className="lg:max-w-[70%]">
            Nuestro objetivo es el de crear un espacio donde se pueda fomentar
            la cultura literaria, leer libros nuevos de todo tipo de genero
            literario, permitiendo aprender cosas nuevas y crear comunidades que
            compartan sus opiniones y aprendizajes de cada una de las obras
            literarias que les interese, permitiendo que lo puedan compartir con
            el resto de la comunidad por medio de nuestra plataforma.
          </p>
        </div>
      </section>
    </>
  );
}
export default About;
