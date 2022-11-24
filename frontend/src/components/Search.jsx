import { AiOutlineCalendar } from "react-icons/ai";
import { BsPerson, BsSearch } from "react-icons/bs";
// import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { format } from "date-fns/esm";

const Search = () => {
  const [open, setOpen] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
  };

  return (
    <div className="md:block z-20 mb-10">
      <form className=" bg-white shadow-md rounded-md px-6 py-2 m-2 ">
        <div className="grid bg-slate-200 items-center grid-cols-2 sm:grid-cols-4 gap-2 md:grid-cols-4">
          <div className="relative col-span-2  md:col-span-1 ">
            <input
              type="text"
              placeholder="Busca un destino"
              className="w-full border-2 border-gray py-1 pl-4 outline-none"
            />
            <BsSearch className="absolute right-3 top-3" />
          </div>

          <div
            onClick={() => setOpen((prev) => !prev)}
            className="relative col-span-2 md:col-span-1 w-full "
          >
            {/* <input
              type="text"
              value={selectionRange.startDate}
              className="border-2 w-full   border-gray py-1  outline-none"
            /> */}
            <span className=" flex gap-2 text-xs md:text-md text-slate/90 border-2 border-gray max-h-[36px] w-full py-2 pl-4">
              <p>{`${format(date[0].startDate, "MM/dd/yyyy")}`}</p> -
              <p>{`${format(date[0].endDate, "MM/dd/yyyy")}`}</p>
            </span>
            {open && (
              <DateRangePicker
                className="absolute z-20 top-[60px] shadow-md bg-white"
                ranges={date}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                onChange={(item) => setDate([item.selection])}
              />
            )}
            <AiOutlineCalendar className="absolute right-3 top-3" />
          </div>
          <div className="relative col-span-2 md:col-span-1 ">
            <input
              type="text"
              placeholder="Cantidad de personas"
              className="border-2 w-full border-gray py-1 pl-4 outline-none"
            />
            <BsPerson className="absolute  right-3 top-3" />
          </div>
          <button
            onClick={handleSubmit}
            className="text-white col-span-2  md:col-span-1  font-bold text-md rounded-xl  bg-blue w-full py-2 hover:bg-blue/90 ease-in duration-100 "
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Search;
