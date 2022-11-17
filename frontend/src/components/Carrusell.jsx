import { AiFillStar } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Carrusell = ({ title, data }) => {
  return (
    <div className="mb-6  ">
      <div className="px-2">
        <h2 className="text-slate-900 font-bold text-2xl mb-2">{title}</h2>
        <div className="relative flex items-center gap-2">
          <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scrollbar-hide ">
            {data.map((item, index) => (
              <div className="inline-block overflow-hidden m-2  rounded-t-lg shadow-lg ">
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
        </div>
      </div>
    </div>
  );
};
export default Carrusell;
