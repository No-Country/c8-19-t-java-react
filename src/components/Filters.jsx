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

const Filters = ({ onToggleFilters }) => {
  const [menuRating, setMenuRating] = useState(false);
  const [menuPrice, setMenuPrice] = useState(false);
  const [menuCategory, setMenuCategory] = useState(false);
  const [menuAmount, setMenuAmount] = useState(false);

  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  console.log(filter);

  const prices = {
    title: "Precio x noche",
    items: [
      `Entre ${4000} y ${6000}`,
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
    <div className="pb-4 shadow-md">
      <div className="hidden md:flex h-[70px] justify-center items-center ">
        <h3 className="text-[#979797] text-lg">Filtrar</h3>
      </div>
      <div>
        <form>
          <div
            className="text-[#979797] text-lg p-2 w-full flex justify-between items-center border-t border-[#8f7272]"
            onClick={() => {
              setMenuRating(!menuRating);
            }}
          >
            Rating
            {menuRating ? (
              <SlArrowDown className="text-[#979797] font-medium text-xl" />
            ) : (
              <SlArrowUp className="text-[#979797] text-xl font-medium" />
            )}
          </div>
          {ratings.items.map((item, index) => (
            <div
              onClick={() => dispatch(setRating(item))}
              key={index}
              className={`${
                menuRating && "hidden"
              } flex items-center gap-2 mb-2 px-3 cursor-pointer`}
            >
              {" "}
              <input
                onChange={(e) => dispatch(setPrice(e.target.value))}
                type="radio"
                name="filters"
                id={item}
                value={item}
                className="h-4 w-4 border-[#979797] cursor-pointer"
              />
              <label
                htmlFor={item}
                className=" text-[#979797] cursor-pointer text-lg"
              >
                <Rating readOnly value={item} />
              </label>
            </div>
          ))}
          <div
            className="text-[#979797] text-lg p-2 w-full flex justify-between items-center border-t border-[#979797]"
            onClick={() => setMenuPrice(!menuPrice)}
          >
            Precio
            {menuPrice ? (
              <SlArrowDown className="text-[#979797] font-medium text-xl" />
            ) : (
              <SlArrowUp className="text-[#979797] text-xl font-medium" />
            )}
          </div>
          {prices.items.map((item, index) => (
            <div
              key={index}
              className={`${
                menuPrice && "hidden"
              } flex items-center gap-2 mb-2 px-3 cursor-pointer`}
            >
              <input
                onChange={(e) => dispatch(setPrice(e.target.value))}
                type="radio"
                name="filters"
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
            onClick={() => setMenuCategory(!menuCategory)}
          >
            Categorias
            {menuCategory ? (
              <SlArrowDown className="text-[#979797] font-medium text-xl" />
            ) : (
              <SlArrowUp className="text-[#979797] text-xl font-medium" />
            )}
          </div>
          {features.items.map((item, index) => (
            <div
              key={index}
              className={`${
                menuCategory && "hidden"
              } flex items-center gap-2 mb-2 px-3 cursor-pointer`}
            >
              <input
                onChange={(e) => dispatch(setCategory(e.target.value))}
                type="radio"
                name="filters"
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
            onClick={() => setMenuAmount(!menuAmount)}
          >
            Personas
            {menuAmount ? (
              <SlArrowDown className="text-[#979797] font-medium text-xl" />
            ) : (
              <SlArrowUp className="text-[#979797] text-xl font-medium" />
            )}
          </div>
          {amountOfPeople.items.map((item, index) => (
            <div
              key={index}
              className={`${
                menuAmount && "hidden"
              } flex items-center gap-2 mb-2 px-3 cursor-pointer`}
            >
              <input
                onChange={(e) => dispatch(setAmount(e.target.value))}
                type="radio"
                name="filters"
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
