import { Rating } from "@mui/material";
import { AiOutlineDelete, AiOutlineHeart, AiOutlineWifi } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAddToFavMutation } from "../redux/api/sunnyApi";

const CardHotel = ({ hotel, addedToFavs }) => {
  const [addToFav, result] = useAddToFavMutation();

  const user = useSelector((state) => state.auth.user);

  console.log(user);

  const handleFav = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    console.log("hola");
    const newFavHotel = {
      id: hotel._id,
      name: user,
    };
    console.log(newFavHotel);
    addToFav(newFavHotel);
    console.log(result);
  };

  return (
    <Link to={`/${hotel._id}`}>
      <div className="flex gap-2  bg-white rounded-xl overflow-hidden">
        <figure className="w-[400px] h-[240px] object-cover bg-slate">
          <img
            className="w-full h-full  object-cover bg-slate"
            src={hotel.pictures[0]}
            alt={hotel.title}
          />
        </figure>
        <div className="flex justify-between items-center w-full p-4">
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
          <div className="flex flex-col justify-between items-end h-full">
            <button className="bg-white shadow-md  p-1 w-[50px] h-[50px] flex justify-center items-center rounded-full">
              {addedToFavs ? (
                <AiOutlineDelete
                  onClick={handleFav}
                  className="text-slate/40 text-2xl font-thin"
                />
              ) : (
                <AiOutlineHeart
                  onClick={handleFav}
                  className=" text-slate/40 text-2xl font-thin"
                />
              )}
            </button>
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
