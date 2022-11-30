import { useGetHotelQuery } from "../redux/api/hotelsApi";
import { AiFillStar, AiOutlineWifi } from "react-icons/ai";

import Search from "../components/Search";
import ImageList from "../components/ImageList";
import RoomCard from "../components/RoomCard";
import Comments from "../components/Comments";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

const PlaceDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetHotelQuery(id);

  console.log(data?.findHotel);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );

  return (
    <div className="px-[1rem] md:container pt-20 md:pt-28">
      <div className="flex items-baseline">
        <h2 className="text-3xl text-black ">{data?.findHotel?.title}</h2>
        <div className="flex gap-1 pl-5">
          <AiFillStar className="text-orange" />
          <AiFillStar className="text-orange" />
          <AiFillStar className="text-orange" />
          <AiFillStar className="text-orange" />
          <AiFillStar className="text-orange" />
        </div>
      </div>
      <p className="text-sm text-slate pt-2.5">
        Habitación por noche desde <span className="text-blue">MXN$ 1,244</span>{" "}
        + MXN$ 236 IVA
      </p>
      <ImageList pictures={data?.findHotel?.pictures} />
      <h3 className="text-lg text-slate mb-8">
        Elige tu habitación en Fiesta Inn Oaxaca
      </h3>
      <RoomCard data={data?.findHotel?.rooms} />
      <Comments />
    </div>
  );
};
export default PlaceDetails;
