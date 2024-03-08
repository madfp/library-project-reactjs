import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Book from "../../assets/Book.svg";
function Header() {
  return (
    <header className="py-3 px-8 flex justify-between items-center">
      <a href="/" className="flex gap-1 font-bold">
        <img src={Book} alt="Icono de libro" />
        TuLibreria.com
      </a>
      {/* Contenido segun la sesion del usuario */}
      <nav className="hidden md:block">
        <ul className="flex justify-center gap-6">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/sobre-nosotros">Sobre nosotros</a>
          </li>
          <li>
            <a href="/libros">Libros</a>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex md:gap-2">
        <a
          href="/registrarme"
          className={`${buttonVariants({ variant: "outline" })}`}
        >
          Registrarme
        </a>
        <a
          href="/iniciar-sesion"
          className={`${buttonVariants({ variant: "default" })}`}
        >
          Ingresar
        </a>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      {/* Contenido para el usuario autenticado */}
    </header>
  );
}
export default Header;
