import { AiOutlineCalendar } from "react-icons/ai";
import { BsPerson, BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <form className="shadow-md rounded-md p-6 ">
        <h2 className="text-slate-900 font-bold text-2xl mb-6">¡Bienvenido!</h2>
        <div className="flex flex-col gap-2">
          <div className="relative ">
            <input
              type="text"
              className="w-full border-2 border-gray-200 py-1 pl-10 outline-none"
            />
            <BsSearch className="absolute left-3 top-3" />
          </div>
          <div className="flex gap-2">
            <div className="relative ">
              <input
                type="text"
                className="border-2   border-gray-200 py-1 pl-10 outline-none"
              />
              <AiOutlineCalendar className="absolute left-3 top-3" />
            </div>
            <div className="relative   ">
              <input
                type="text"
                className="border-2  border-gray-200 py-1 pl-10 outline-none"
              />
              <BsPerson className="absolute  left-3 top-3" />
            </div>
          </div>
        </div>
        <button className="text-white text-md rounded-xl mt-6 bg-blue-200 w-full py-3 hover:bg-blue-300 ease-in duration-100 ">
          Buscar
        </button>
      </form>
    </div>
  );
};
export default Search;
