import { AiOutlineCalendar } from "react-icons/ai";
import { BsPerson, BsSearch } from "react-icons/bs";

import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { DaysContext } from "../context/DaysProvider";

const persons = [1, 2, 3, 4];

const Search = () => {
  const navigate = useNavigate();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const { setDays } = useContext(DaysContext);

  const [searchInputs, setSearchInputs] = useState({
    place: "",
    date: [],
    amount: 0,
  });

  const handleChange = (e) => {
    setSearchInputs({ ...searchInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    const diff = date[0].endDate - date[0].startDate;
    setDays(diff / (1000 * 60 * 60 * 24));
    navigate("/resultsPage");
  };

  return (
    <div className="md:block z-20 mb-10">
      <form className="bg-white/80 sm:bg-white shadow-md rounded-md  m-2 ">
        <div className="grid bg-slate-200 items-center py-2 grid-cols-2 sm:grid-cols-4 gap-6 md:grid-cols-4  border-2 border-orange">
          <div className="relative col-span-2  md:col-span-1 px-4 ">
            <input
              name="place"
              value={searchInputs.place}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Busca por lugar"
            />
            <BsSearch className="absolute  right-4 top-1 text-md" />
          </div>

          <div className="relative col-span-2 md:col-span-1 w-full  ">
            <span>{`${format(date[0].startDate, "MM/dd/yyyy")} hasta ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openCalendar && (
              <DateRange
                className="absolute top-10 z-40 left-0"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
            <AiOutlineCalendar
              onClick={() => setOpenCalendar((prev) => !prev)}
              className="absolute  right-4 top-0 text-xl"
            />
          </div>
          <div className="relative col-span-2 md:col-span-1   ">
            <select
              name="amount"
              className="w-full"
              value={searchInputs.amount}
              // label="Age"
              onChange={handleChange}
            >
              {persons.map((person) => (
                <option key={person} value={person}>
                  <BsPerson />
                  <span className="ml-8"> {person}</span>
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white w-[240px] mx-auto col-span-2  md:col-span-1  font-bold text-md rounded-xl bg-blue/80 sm:bg-blue  py-2 hover:bg-blue/90 ease-in duration-100 "
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Search;
