import { AiFillStar } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const Carrusell = ({ title, data }) => {
  const moveLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 260;
  };

  const moveRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 260;
  };

  return (
    <div className="py-6 ">
      <div className="px-2">
        <h2 className="text-slate-900 font-bold text-2xl mb-2">{title}</h2>
        <div className="relative flex items-center">
          <MdOutlineArrowBackIos
            onClick={moveLeft}
            className="absolute top-0 left-[-10px]  h-[100%] duration-200 z-400  "
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scrollbar-hide scroll-smooth "
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="inline-block overflow-hidden m-2  rounded-t-2xl shadow-lg "
              >
                <figure className="overflow-hidden">
                  <img
                    className=" w-64  hover:scale-[1.2] duration-500"
                    src={item.img}
                    alt={item.title}
                  />
                </figure>
                <div className="p-2">
                  <div className="flex justify-between">
                    <h4 className="text-slate-900 text-md mb-2 font-semibold">
                      {item.title}
                    </h4>
                    <span className="flex items-center gap-1">
                      {item.rating}
                      <AiFillStar className="text-orange-300" />
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <HiOutlineOfficeBuilding />
                    <p className="">{item.subt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <MdArrowForwardIos
            onClick={moveRight}
            className="absolute top-0 right-0 bg-black/30 text-white h-[100%] ease-in duration-200  z-400"
          />
        </div>
      </div>
    </div>
  );
};
export default Carrusell;
