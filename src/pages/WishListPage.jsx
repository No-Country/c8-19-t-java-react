import { useSelector } from "react-redux";
import CardHotel from "../components/CardHotel";

const WishListPage = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="md:container  pt-[10rem] w-full gap-4">
      <div className="flex flex-col gap-4 shadow-md mb-8">
        {auth?.favorites[0].map((hotel) => (
          <CardHotel key={hotel._id} hotel={hotel} addedToFavs={true} />
        ))}
      </div>
    </div>
  );
};
export default WishListPage;
