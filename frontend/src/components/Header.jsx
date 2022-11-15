import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, handleLogOut } = useAuth();

 const navigate = useNavigate()

 const handleLogin =()=>{
  navigate('/login')
 }

  return (
    <header className=" bg-slate-400 w-full ">
      <div className="flex justify-between items-center px-[10%] m-auto">
        <Link to="/" className="font-bold text-2xl">
          LOGO
        </Link>
        <ul className=" flex gap-6 py-4 items-center ">
          <Link className="text-xl" to="/">
            Home
          </Link>
          <Link className="text-xl" to="/shop">
            Shop
          </Link>
          <Link className="text-xl" to="/contact">
            Contact
          </Link>
          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-orange-500 text-white px-4 py-1 text-xl rounded font-semibold cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-orange-500 text-white px-4 py-1 text-xl rounded font-semibold cursor-pointer"
            >
              Login
            </button>
          )}
        </ul>
        {/* <span
          className={
            user
              ? `bg-green-400 rounded text-white font-bold text-xl py-1 px-4`
              : undefined
          }
        >
          {user && "Conectado"}
        </span> */}
      </div>
    </header>
  );
};
export default Header;
