import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import DropDownMenu from "./DropDownMenu";
import WishList from "./WishList";

const Navbar = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  console.log(auth);

  return (
    <header className=" bg-blue w-full shadow-lg fixed px-4 py-2 z-40 ">
      <div className="md:container flex justify-between items-center">
        <Link to="/">
          <h1 className="text-white font-semibold text-3xl">Sunny Holidays</h1>
        </Link>
        <ul className="hidden items-center md:flex py-4  gap-2 text-blue text-sm md:text-md ">
          <Link to="/panel">
            <li className="flex  items-center gap-2 rounded-md text-white px-4 py-2">
              <AiFillHome className="text-xl" />
              Publica tu propiedad
            </li>
          </Link>
          <WishList />
          <DropDownMenu />
        </ul>
        <div className="md:hidden text-xl text-white">
          <AiOutlineMenu />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
