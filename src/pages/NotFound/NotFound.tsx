import { buttonVariants } from "@/components/ui/button";

function NotFound() {
  return (
    <section className="grid md:grid-cols-2 place-items-center">
      <div className="text-center md:text-left">
        <p className="text-base font-semibold">ERROR 404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7">
          Lo sentimos, la página que buscas no existe.
        </p>
        <div className="mt-6 flex items-center justify-center md:justify-start gap-x-2">
          <a
            href="/"
            className={`mt-4 ${buttonVariants({ variant: "default" })}`}
          >
            Volver al inicio <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <img
        src="/VerticalBookShelf.webp"
        alt="Book Banner"
        className="max-h-[100vh] overflow-hidden hidden md:block w-full"
      />
    </section>
  );
}
export default NotFound;
