import { Link } from "react-router-dom";
import { useGetAllHotelsQuery } from "../redux/api/hotelsApi";
import CardHotel from "./CardHotel";

const Results = () => {
  const { data, isLoading } = useGetAllHotelsQuery();

  console.log(data);

  return (
    <div className="flex flex-col gap-4 ">
      {data?.hotels.map((hotel) => (
        <Link to={`/${hotel._id}`}>
          <CardHotel key={hotel._id} hotel={hotel} />
        </Link>
      ))}
    </div>
  );
};
export default Results;
