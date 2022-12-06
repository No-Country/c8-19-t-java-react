import { Link } from "react-router-dom";
import { useGetAllHotelsQuery } from "../redux/api/sunnyApi";
import CardHotel from "./CardHotel";

const Results = () => {
  const { data, isLoading } = useGetAllHotelsQuery();

  console.log(data);

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex rounded-lg bg-white gap-2 px-2  text-slate capitalize font-semibold justify-between items-center ">
        <span className="font-thin basis-1/4 text-center py-4">
          Ordenar por :
        </span>
        <div className="basis-2/4 border-l  py-4 border-slate/10      text-center ">
          precio
        </div>
        <div className="basis-2/4 border-l  py-4 border-slate/10     text-center">
          mejor valorado
        </div>
        <div className="basis-2/4 border-l  py-4 border-slate/10     text-center">
          recomandado
        </div>
      </div>
      {data?.hotels.map((hotel) => (
        <CardHotel key={hotel._id} hotel={hotel} />
      ))}
    </div>
  );
};
export default Results;
