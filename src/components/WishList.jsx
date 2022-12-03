import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const WishList = () => {
  //   const state = useSelector(useCartSelector);

  return (
    <Link
      to="/wishList"
      className="flex  items-center gap-2 rounded-md text-white px-4 py-2"
    >
      <AiFillHeart className="text-xl" />
      <li>Favoritos</li>
      {/* <span className="absolute flex justify-center items-center text-white bg-orange h-[25px] w-[25px] rounded-full text-sm p-2 top-[-5px] right-[-15px]   ">
        0
      </span> */}
    </Link>
  );
};
export default WishList;
