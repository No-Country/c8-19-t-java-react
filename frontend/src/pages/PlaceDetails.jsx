import { AiFillStar, AiOutlineWifi } from "react-icons/ai";
import { BiBath } from "react-icons/bi";
import data from "../data/dataImages";

const PlaceDetails = () => {
  return (
    <section className="p-4">
      <h3 className="text-slate-900 mb-3 font-bold text-xl">
        Detalles del lugar
      </h3>
      <div className="grid grid-cols-2 gap-2 ">
        {data.map((picture) => (
          <figure className="overflow-hidden">
            <img src={picture.img} alt="" />
          </figure>
        ))}
        <div className="rounded-lg shadow-md col-span-2 p-3 mb-4  ">
          <h4 className="text-slate-900 font-bold text-lg mb-4">
            Lorem ipsum dolor
          </h4>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center text-orange-400">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <span className="text-slate-700">4.9 (980)</span>
          </div>
          <div className="flex gap-6 mb-4">
            <span className="flex gap-2 items-center">
              <BiBath />
              Bathtub
            </span>
            <span className="flex gap-2 items-center">
              <AiOutlineWifi />
              Wifi
            </span>
          </div>
          <p className="text-slate-900 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            tempora architecto aperiam vel saepe consequuntur quasi eius
            accusantium.
          </p>
        </div>
      </div>

      <div className="rounded-lg shadow-md col-span-2 p-3 mb-4">
        <h4 className="text-slate-900 font-bold text-lg mb-4">
          Lorem ipsum dolor sit amet
        </h4>
        <div className="flex items-center gap-4  uppercase ">
          <span className="text-red-500 line-through text-xl font-semibold ">
            mxn 000
          </span>{" "}
          <span className="text-2xl font-bold">mxn 000</span>
        </div>
        <p className="text-slate-900 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          perferendis.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-20">
        <div className="p-2 shadow-lg">
          <h4 className="text-slate-900 font-bold text-md mb-1">Entrada</h4>
          <p className="text-blue-500 text-md">Jue, 17 dic</p>
        </div>

        <div className="p-2 shadow-md">
          <h4 className="text-slate-900 font-bold text-md mb-1">Salida</h4>
          <p className="text-blue-500 text-md">Jue, 17 ene</p>
        </div>
      </div>
    </section>
  );
};
export default PlaceDetails;
