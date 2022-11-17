import { AiOutlineCalendar } from "react-icons/ai";
import { BsPerson, BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <form className="shadow-md rounded-md p-6 ">
        <h2 className="text-slate-700 font-bold text-2xl mb-6">¡Bienvenido!</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative col-span-2 ">
            <input
              type="text"
              className="w-full border-2 border-gray-200 py-1"
            />
            <BsSearch className="absolute left-3 top-3" />
          </div>
          <div className="relative">
            <input type="text" className="border-2 border-gray-200 py-1" />
            <AiOutlineCalendar className="absolute left-3 top-3" />
          </div>
          <div className="relative">
            <input type="text" className="border-2 border-gray-200 py-1" />
            <BsPerson className="absolute left-3 top-3" />
          </div>
        </div>
        <button className="text-white text-xl text-semibold rounded-xl mt-6 bg-blue-300 w-full py-2">
          Buscar
        </button>
      </form>
    </div>
  );
};
export default Search;
