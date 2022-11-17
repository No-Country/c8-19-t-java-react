import img1 from "../img/test.jpg";
import img2 from "../img/test-2.jpg";
import img3 from "../img/test-3.jpg";
import img4 from "../img/test-4.jpg";
import { AiFillStar } from "react-icons/ai";
import dataPlaces from "../data/dataImages";

const Escapadas = () => {
  return (
    <div className="  ">
      <div className="px-2">
        <h2 className="text-slate-900 font-bold text-2xl mb-2">Escapadas</h2>
        <div className="relative flex items-center gap-2">
          <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap ">
            {dataPlaces.map((place, index) => (
              <div className="inline-block overflow-hidden m-2  rounded-t-lg shadow-lg ">
                <img
                  className=" w-64  hover:scale-[1.2] duration-500 "
                  src={place.img}
                  alt={place.title}
                />
                <div className="p-2">
                  <div className="flex justify-between">
                    <h4 className="text-slate-900 text-md mb-2 font-semibold">
                      {place.title}
                    </h4>
                    <span className="flex items-center gap-1">
                      {place.rating}
                      <AiFillStar className="text-orange-300" />
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{place.subt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Escapadas;
