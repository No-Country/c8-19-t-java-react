import Destacados from "../components/Destacados";
import Escapadas from "../components/Escapadas";
import Search from "../components/Search";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="">
      <Search />
      <Escapadas />
      <Destacados />
    </div>
  );
};
export default Home;
