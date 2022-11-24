import { AiOutlineCalendar } from "react-icons/ai";
import { BsPerson, BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="flex items-center justify-centermd:max-w-[80%] md:block z-20 mb-10">
      <form className=" bg-white shadow-md rounded-md px-6 py-2 m-2 ">
        <div className="grid bg-slate-200 items-center grid-cols-2 gap-2 md:grid-cols-4">
          <div className="relative col-span-2 md:col-span-1 ">
            <input
              type="text"
              className="w-full border-2 border-gray py-1 pl-10 outline-none"
            />
            <BsSearch className="absolute left-3 top-3" />
          </div>

          <div className="relative ">
            <input
              type="text"
              className="border-2 w-full   border-gray py-1  outline-none"
            />
            <AiOutlineCalendar className="absolute left-3 top-3" />
          </div>
          <div className="relative ">
            <input
              type="text"
              className="border-2 w-full border-gray py-1 outline-none"
            />
            <BsPerson className="absolute  left-3 top-3" />
          </div>
          <button className="text-white  font-bold text-md rounded-xl  bg-blue w-full py-2 hover:bg-blue/90 ease-in duration-100 ">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Search;
