import { Rating } from "@mui/material";
import { AiOutlineDelete, AiOutlineHeart, AiOutlineWifi } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRemoveFavMutation } from "../redux/api/sunnyApi";
import { useAddToFavMutation } from "../redux/api/sunnyApi";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { useContext } from "react";
import { DaysContext } from "../context/DaysProvider";

const CardHotel = ({ hotel, addedToFavs }) => {
  const [addToFav] = useAddToFavMutation();
  const [buttonClicked, setbuttonClicked] = useState(false);

  const { days } = useContext(DaysContext);

  console.log(days);

  const [removeFav] = useRemoveFavMutation();

  const { user, token } = useSelector((state) => state.auth);

  const handleFav = async (e) => {
    e.preventDefault();
    setbuttonClicked(true);

    if (!token) {
      console.log("debes estar autenticado");
      return;
    }

    const newFavHotel = {
      id: hotel._id,
      name: user,
    };

    addToFav(newFavHotel);
  };

  const handleFavDelete = (e) => {
    e.preventDefault();
    setbuttonClicked(true);

    if (!token) {
      console.log("debes estar autenticado");
      return;
    }

    const newFavHotel = {
      id: hotel._id,
      name: user,
    };

    removeFav(newFavHotel);
  };

  return (
    <Link to={`/${hotel._id}`}>
      <div className="flex flex-col md:flex-row gap-2  bg-white rounded-xl overflow-hidden">
        <figure className="w-full  md:w-[400px] h-[240px] object-cover bg-slate">
          <img
            className="w-full h-full  object-cover"
            src={hotel.pictures[0]}
            alt={hotel.title}
          />
        </figure>
        <div className="flex flex-col md:flex-row justify-between gap-4  w-full p-4">
          <div className="flex flex-col ">
            <h4 className="text-slate font-bold text-xl">{hotel.title}</h4>
            <Rating
              name="read-only"
              value={hotel.rating}
              precision={0.5}
              readOnly
            />
            <span className="bg-blue text-white text-sm font-semibold rounded-md w-fit px-4 py-2 my-2">
              {hotel.rating}
            </span>
            <div>
              <span className="text-slate font-semibold text-md">
                Services:
              </span>
              <ul className="flex gap-3 text-slate capitalize ">
                {Object.keys(hotel.services).map((service, index) => (
                  <li className="text-sm" key={index}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end h-full relative gap-2">
            <button className="bg-white shadow-md  p-1 w-[50px] h-[50px] flex justify-center items-center rounded-full">
              {addedToFavs ? (
                <AiOutlineDelete
                  onClick={handleFavDelete}
                  className="text-slate/40 text-2xl font-thin"
                />
              ) : (
                <AiOutlineHeart
                  onClick={handleFav}
                  className=" text-slate/40 text-2xl font-thin"
                />
              )}
            </button>
            <div>
              {days ? (
                <p>
                  $ x {days} noches {days ? hotel.price * days : hotel.price}
                </p>
              ) : (
                <p>$ x noche {hotel.price}</p>
              )}
            </div>

            <button className="bg-blue self-end hover:bg-blue/75 duration-300  text-white capitalize font-semibold w-[200px] rounded-xl p-4">
              ver disponibilidad
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CardHotel;
