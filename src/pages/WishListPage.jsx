import { useSelector } from "react-redux";
import CardHotel from "../components/CardHotel";
import { useGetFavHotelsQuery } from "../redux/api/sunnyApi";

const WishListPage = () => {
  const id = useSelector((state) => state.auth.id);

  console.log(id);

  const { data, isLoading, error } = useGetFavHotelsQuery(id);

  console.log(data);

  return (
    <div className="md:container  pt-[10rem] w-full gap-4 min-h-screen">
      <h2 className="text-slate font-bold text-xl mb-4 ">
        Tus hoteles favoritos
      </h2>
      <div className="flex flex-col gap-4 shadow-md mb-8">
        {data?.favHotels.map((hotel) => (
          <CardHotel key={hotel._id} hotel={hotel} addedToFavs={true} />
        ))}
      </div>
    </div>
  );
};
export default WishListPage;
