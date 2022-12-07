import { Rating } from "@mui/material";
import { AiOutlineHeart, AiOutlineWifi } from "react-icons/ai";

const CardHotel = ({ hotel }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center bg-white rounded-xl overflow-hidden">
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
            <span className="text-slate font-semibold text-md">Services:</span>
            <ul className="flex gap-3 text-slate capitalize flex-wrap pt-2">
              {Object.keys(hotel.services).map((service, index) => (
                <li className="text-sm" key={index}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-between items-end h-full">
          <button className="bg-white shadow-md  p-1 w-[50px] h-[50px] flex justify-center items-center rounded-full">
            <AiOutlineHeart className=" text-slate/40 text-2xl font-thin" />
          </button>
          <button className="hidden md:flex bg-blue self-end hover:bg-blue/75 duration-300  text-white capitalize font-semibold w-full rounded-xl p-4 whitespace-nowrap">
            ver disponibilidad
          </button>
        </div>
        
      </div>
      <button className="block md:hidden bg-blue self-end hover:bg-blue/75 duration-300 text-white capitalize font-semibold w-full rounded-xl p-4 whitespace-nowrap">
            ver disponibilidad
          </button>
    </div>
  );
};
export default CardHotel;
