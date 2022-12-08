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
      <div className="flex flex-col gap-4 mb-8">
        {data?.favHotels.length === 0 ? (
          <div className="flex justify-center items-center">
            <p className="text-2xl">Aun no se agregaron hoteles favoritos</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl text-slate  font-semibold">
              Tus hoteles favoritos
            </h2>
            {data?.favHotels.map((hotel) => (
              <CardHotel key={hotel._id} hotel={hotel} addedToFavs={true} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default WishListPage;
