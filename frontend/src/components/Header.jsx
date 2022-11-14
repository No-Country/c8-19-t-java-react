import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-slate-400 w-full ">
      <div className="flex justify-between items-center px-[10%] m-auto">
        <Link to="/">LOGO</Link>
        <ul className=" flex gap-6 py-4 ">
          <Link className="text  font-semibold " to="/">
            Home
          </Link>
          <Link className="text  font-semibold " to="/shop">
            Shop
          </Link>
          <Link className="text  font-semibold " to="/contact">
            Contact
          </Link>
        </ul>
      </div>
    </header>
  );
};
export default Header;
