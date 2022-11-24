import Carrusel from "../components/Carrusel";
import Search from "../components/Search";
import { useGetAllPropertiesQuery } from "../redux/api/propertiesApi";

const Home = () => {
  const { data } = useGetAllPropertiesQuery();

  console.log(data);

  return (
    <div className="overflow-x-hidden">
      <div className="bg-hero min-h-[40vh]  bg-cover bg-center mb-[-35px] z-10 "></div>

      <div className="md:container">
        <Search />
        <Carrusel
          title="Escapadas"
          subtitle="Destinos en Mexico que tienne mucho para ofrecer"
          data={data}
        />
      </div>
    </div>
  );
};
export default Home;
