import { useGetHotelQuery } from "../redux/api/sunnyApi";
import { AiFillStar, AiOutlineWifi } from "react-icons/ai";

import Search from "../components/Search";
import ImageList from "../components/ImageList";
import RoomCard from "../components/RoomCard";
import Comments from "../components/Comments";
import { CircularProgress, Rating } from "@mui/material";
import { useParams } from "react-router-dom";

const PlaceDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetHotelQuery(id);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );

  return (
    <div className="px-[1rem] pt-20 md:pt-28">
      <div className="md:container">
        <div className="flex items-center gap-4 ">
          <h2 className="text-3xl text-black font-semibold ">
            {data?.findHotel?.title}
          </h2>
          <Rating
            name="read-only"
            sx={{ fontSize: "2rem", color: "#FCDB8A" }}
            value={data?.findHotel.rating}
            precision={0.5}
            readOnly
          />
        </div>
        <p className="text-sm text-slate pt-2.5">
          Habitación por noche desde{" "}
          <span className="text-blue">MXN$ 1,244</span> + MXN$ 236 IVA
        </p>
        <ImageList pictures={data?.findHotel?.pictures} />
        <h3 className="text-lg text-slate mb-8">
          Elige tu habitación en Fiesta Inn Oaxaca
        </h3>
      </div>
      {data?.findHotel?.rooms.map((room) => (
        <RoomCard key={room._id} room={room} />
      ))}

      <Comments data={data?.findHotel} />
    </div>
  );
};
export default PlaceDetails;
