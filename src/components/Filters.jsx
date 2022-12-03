import { Rating } from "@mui/material";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import {
  setAmount,
  setCategory,
  setPrice,
  setRating,
} from "../redux/slices/filterSlice";

const Filters = () => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);

  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  console.log(filter);

  const prices = {
    title: "Precio x noche",
    items: [
      `Èntre ${4000} y ${6000}`,
      `Entre ${6000} y ${8000}`,
      `Entre ${8000} y ${10000}`,
      `Más de ${10000}`,
    ],
    menuOpen: false,
  };

  const features = {
    title: "Características",
    items: [
      "Aire Acondicionado",
      "Calefacción",
      "Garage",
      "Wifi",
      "Acepta mascotas",
      "Pileta",
      "Parrilla",
    ],
    menuOpen: false,
  };
  const amountOfPeople = {
    title: "Cantidad de personas",
    items: [1, 2, 3, 4],
    menuOpen: true,
  };

  const ratings = {
    title: "Calificaion",
    items: [1, 2, 3, 4, 5],
    menuOpen: true,
  };

  return (
    <div className="pb-4 pr-4">
      <div className={`${active && "hidden"}`}>
        <form>
          <div
            className="text-[#979797] text-lg p-2 w-full flex justify-between items-center border-t border-[#979797]"
            onClick={() => setActive(!active)}
          >
            Rating
            {active ? (
              <SlArrowDown className="text-[#979797] font-medium text-xl" />
            ) : (
              <SlArrowUp className="text-[#979797] text-xl font-medium" />
            )}
          </div>
          {ratings.items.map((item, index) => (
            <div
              onClick={() => dispatch(setRating(item))}
              key={index}
              className="flex items-center gap-2 mb-2 px-3 cursor-pointer"
            >
              <Rating readOnly value={item} />
            </div>
          ))}
          <div
            className="text-[#979797] text-lg p-2 w-full flex justify-between items-center border-t border-[#979797]"
            onClick={() => setActive(!active)}
          >
            Precio
            {active ? (
              <SlArrowDown className="text-[#979797] font-medium text-xl" />
            ) : (
              <SlArrowUp className="text-[#979797] text-xl font-medium" />
            )}
          </div>
          {prices.items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 mb-2 px-3">
              <input
                onChange={(e) => dispatch(setPrice(e.target.value))}
                type="radio"
                name={prices.title}
                id={item}
                value={item}
                className="h-4 w-4 border-[#979797] cursor-pointer"
              />
              <label
                htmlFor={item}
                className=" text-[#979797] cursor-pointer text-lg"
              >
                {item}
              </label>
            </div>
          ))}
          <div
            className="text-[#979797] text-lg p-2 w-full flex justify-between items-center border-t border-[#979797]"
            onClick={() => setActive(!active)}
          >
            Categorias
            {active ? (
              <SlArrowDown className="text-[#979797] font-medium text-xl" />
            ) : (
              <SlArrowUp className="text-[#979797] text-xl font-medium" />
            )}
          </div>
          {features.items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 mb-2 px-3">
              <input
                onChange={(e) => dispatch(setCategory(e.target.value))}
                type="radio"
                name={prices.title}
                id={item}
                value={item}
                className="h-4 w-4 border-[#979797] cursor-pointer"
              />
              <label
                htmlFor={item}
                className=" text-[#979797] text-lg cursor-pointer"
              >
                {item}
              </label>
            </div>
          ))}
          <div
            className="text-[#979797] text-lg p-2 w-full flex justify-between items-center border-t border-[#979797]"
            onClick={() => setActive(!active)}
          >
            Personas
            {active ? (
              <SlArrowDown className="text-[#979797] font-medium text-xl" />
            ) : (
              <SlArrowUp className="text-[#979797] text-xl font-medium" />
            )}
          </div>
          {amountOfPeople.items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 mb-2 px-3">
              <input
                onChange={(e) => dispatch(setAmount(e.target.value))}
                type="radio"
                name={prices.title}
                id={item}
                value={item}
                className="h-4 w-4 border-[#979797] cursor-pointer"
              />
              <label
                htmlFor={item}
                className=" text-[#979797] text-lg cursor-pointer"
              >
                {item}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Filters;
