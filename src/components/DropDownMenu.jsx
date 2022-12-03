import { useState } from "react";

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineLogin,
  MdOutlineLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AiFillHome, AiOutlineHeart } from "react-icons/ai";

import { BsFillPersonFill, BsPersonFill } from "react-icons/bs";
import { logout } from "../redux/slices/authSlice";

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  console.log(user);

  const handleLogout = (e) => {
    e.stopPropagation();
    dispatch(logout());
    setIsOpen(false);
  };

  return (
    <div
      className="relative hover:cursor-pointer "
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center text-white gap-2">
        <BsFillPersonFill className="text-xl" />
        {user ? <p>{`${user}`}</p> : "Mi cuenta"}
      </div>
      {isOpen && (
        <ul className="absolute top-[50px] right-[-25px] w-[260px] px-6 py-2 bg-white rounded-sm z-40 shadow-lg ">
          <li className="flex justify-between items-center w-full my-3">
            <Link
              className="flex gap-4 items-center  hover:cursor-pointer hover:text-orange  "
              to="/profile"
            >
              <BsPersonFill className="text-2xl bg-gray/50 text-slate rounded-full p-1 " />{" "}
              <p className="text-md text-slate font-thin">Edit Profile</p>
            </Link>
            <MdOutlineKeyboardArrowRight className="text-xl font-thin text-slate/90" />
          </li>

          {user ? (
            <li
              className="flex justify-between items-center w-full my-3"
              onClick={handleLogout}
            >
              <Link
                className="flex gap-4 items-center hover:cursor-pointer hover:text-orange-500    "
                to=""
              >
                <MdOutlineLogout className="text-2xl bg-gray/50 text-slate rounded-full p-1" />
                <p className="text-sm text-slate font-thin">Salir </p>
              </Link>
              <MdOutlineKeyboardArrowRight className="text-xl font-thin text-slate/90" />
            </li>
          ) : (
            <>
              <li className="flex justify-between items-center w-full my-3">
                <Link
                  className="flex gap-4 items-center  hover:cursor-pointer hover:text-orange-500  "
                  to="/login"
                >
                  <MdOutlineLogin className="text-2xl bg-gray/50 text-slate rounded-full p-1" />
                  <p className="text-sm text-slate font-thin">
                    Ingresar con mi cuenta
                  </p>
                </Link>
                <MdOutlineKeyboardArrowRight className="text-xl font-thin text-slate/90" />
              </li>
              <li className="flex justify-between items-center w-full my-3">
                <Link
                  className="flex gap-4 items-center  hover:cursor-pointer hover:text-orange  "
                  to="/register"
                >
                  <AiOutlineHeart className="text-2xl bg-gray/50 text-slate rounded-full p-1 " />{" "}
                  <p className="text-sm text-slate font-thin">Crear cuenta </p>
                </Link>
                <MdOutlineKeyboardArrowRight className="text-xl font-thin text-slate/90" />
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};
export default DropDownMenu;
