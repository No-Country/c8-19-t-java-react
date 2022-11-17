import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { GrHomeRounded } from "react-icons/gr";
import { BsPencilSquare, BsPerson, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Navbar = () => {
  const { user, handleLogOut } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className=" bg-white w-full shadow-lg fixed bottom-0 ">
      <div className="">
        <ul className="flex gap-6 py-4 items-center justify-between px-10 ">
          <Link to="/" className="group flex flex-col items-center gap-1 ">
            <GrHomeRounded className="text-3xl text-slate-900 group-hover:text-blue-300" />
            <p className="text-gray-500 text-sm group-hover:text-slate-900 group-hover:text-semibold">
              Home
            </p>
          </Link>
          <Link
            className="group flex flex-col items-center gap-1  ease-in duration-100"
            to="/"
          >
            <BsSearch className="text-3xl text-slate-900 group-hover:text-blue-300" />
            <p className="text-gray-500 text-sm group-hover:text-slate-900 group-hover:text-semibold">
              Buscar
            </p>
          </Link>
          <Link
            className="group flex flex-col items-center gap-1  ease-in duration-100"
            to="/contact"
          >
            <AiOutlineHeart className="text-3xl text-slate-900 group-hover:text-blue-300 " />
            <p className="text-gray-500 text-sm group-hover:text-slate-900 group-hover:text-semibold ">
              Publicar
            </p>
          </Link>
          <Link
            className="group flex flex-col items-center gap-1   ease-in duration-100"
            to="/shop"
          >
            <BsPencilSquare className="text-3xl text-slate-900 group-hover:text-blue-300" />
            <p className="text-gray-500 text-sm group-hover:text-slate-900 group-hover:text-semibold">
              Favoritos
            </p>
          </Link>
          <Link
            className="group flex flex-col items-center gap-1  ease-in duration-100"
            to="/contact"
          >
            <BsPerson className="text-3xl text-slate-900 hover:text-blue-300" />
            <p className="text-gray-500 text-sm group-hover:text-slate-900 group-hover:text-semibold">
              Perfil
            </p>
          </Link>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
