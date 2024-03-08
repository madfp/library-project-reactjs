import Link from "react-hook-form";
function Footer() {
  return (
    <footer className="bg-slate-100 rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <span className="hover:underline cursor-pointer">
            TuLibreria.com™
          </span>
          . Derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/sobre-nosotros" className="hover:underline me-4 md:me-6">
              Sobre nosotros
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
