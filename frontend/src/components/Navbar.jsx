import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" bg-blue w-full shadow-lg fixed px-4 py-2 z-40 ">
      <div className="md:container flex justify-between items-center">
        <Link to="/">
          <h1 className="text-white font-semibold text-3xl">Sunny Holidays</h1>
        </Link>
        <ul className="hidden md:flex py-4  gap-2 text-blue text-sm md:text-md ">
          <li className="rounded-md bg-white px-4 py-2">Registrate</li>
          <li className="rounded-md bg-white px-4 py-2">Inicia sesion</li>
          <li className="rounded-md bg-white px-4 py-2">
            Publica tu propiedad
          </li>
        </ul>
        <div className="md:hidden text-xl text-white">
          <AiOutlineMenu />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
