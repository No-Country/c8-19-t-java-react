import { AiOutlineCalendar } from "react-icons/ai";
import { BsPerson, BsSearch } from "react-icons/bs";

import { useState } from "react";

import InputCalendar from "./Calendar";
import {
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const persons = [1, 2, 3, 4];

const Search = () => {
  const [searchInputs, setsearchInputs] = useState({
    location: "",
    date: new Date(),
    amount: "",
  });

  const [currency, setCurrency] = useState("EUR");

  const handleChange = (e) => {
    setsearchInputs({ ...searchInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInputs);
  };

  return (
    <div className="md:block z-20 mb-10">
      <form className=" bg-white shadow-md rounded-md px-6 py-2 m-2 ">
        <div className="grid bg-slate-200 items-center grid-cols-2 sm:grid-cols-4 gap-2 md:grid-cols-4">
          <div className="relative col-span-2  md:col-span-1 ">
            <TextField
              id="outlined-basic"
              label="Busca tu destino"
              variant="outlined"
              name="location"
              onChange={handleChange}
              value={searchInputs.location}
              fullWidth
            />
            <BsSearch className="absolute  right-4 top-[35%]" />
          </div>

          <div className="relative col-span-2 md:col-span-1 w-full ">
            <InputCalendar value={searchInputs.date} />
          </div>
          <div className="relative col-span-2 md:col-span-1  ">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchInputs.amount}
                label="Age"
                onChange={handleChange}
                fullWidth
              >
                {persons.map((person) => (
                  <MenuItem
                    sx={{
                      display: "flex",
                      width: "100%",
                    }}
                    key={person}
                    value={person}
                  >
                    <BsPerson />
                    <span className="ml-8"> {person}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <button
            onClick={handleSubmit}
            className="text-white w-[240px] mx-auto col-span-2  md:col-span-1  font-bold text-md rounded-xl  bg-blue  py-2 hover:bg-blue/90 ease-in duration-100 "
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Search;
