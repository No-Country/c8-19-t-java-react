import { Link } from "react-router-dom";
import bsas from "../img/buenos-aires.jpg";
import lujan from "../img/lujan.webp";
import merlo from "../img/merlo.webp";

const categories = [
  {
    name: "buenos aires",
    img: bsas,
  },
  {
    name: "lujan",
    img: lujan,
  },
  {
    name: "merlo",
    img: merlo,
  },
];

const Categories = () => {
  return (
    <section className="my-8">
      <h2 className="text-slate  text-2xl font-semibold mb-2">Escapadas</h2>
      <p className="text-gray-500 text-md mb-6">
        Localidades mas turisticas para visitar
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat, index) => (
          <Link key={index} to={`/resultsPage/${cat.name}`}>
            <div className="opacity-100 hover:opacity-90    overflow-hidden group relative  w-full h-[150px] md:h-[200px] rounded-t-xl cursor-pointer hover:shadow-xl duration-300 ">
              <img
                className="object-cover h-full w-full group-hover:scale-110  ease-in duration-100 "
                src={cat.img}
                alt="mano tomando mancuerna"
              />
              <div className="opacity-0 group-hover:opacity-100 absolute bg-dark/50 h-[100%] w-[100%] top-0 ease-in duration-100"></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-in duration-100 ">
                <h3 className="text-white  text-2xl uppercase font-semibold">
                  {cat.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Categories;
