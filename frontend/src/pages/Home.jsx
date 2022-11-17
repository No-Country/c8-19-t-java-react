import Carrusell from "../components/Carrusell";

import Search from "../components/Search";
import useAuth from "../hooks/useAuth";
import data from "../data/dataImages";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="mb-[5rem]">
      <Search />
      <Carrusell title="Escapadas" data={data} />
      <Carrusell title="Lugares mas recomendados" data={data} />
    </div>
  );
};
export default Home;
