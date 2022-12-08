import { useGetAllHotelsQuery } from "../redux/api/sunnyApi";
import Carrusel from "../components/Carrusel";
import BonusSection from "../components/BonusSection";
import Search from "../components/Search";
import image24 from "../img/image 24.png";
import image25 from "../img/image 25.png";
import { toast } from "react-toastify";
import Categories from "../components/Categories";

const Home = () => {
  const { data } = useGetAllHotelsQuery();
  console.log(data?.hotels);

  const textOne =
    "Ahorra, iniciando sesión en tu cuenta de SunnyHoliday y encontrarás grandes descuentos.";
  const textTwo =
    "Registra tu propiedad y ponla en alquiler o en opción de reservación, todo en SunnyHoliday.";

  return (
    <div className="">
      <div className="bg-hero  min-h-[60vh]  bg-cover bg-center mb-[-280px] sm:mb-[-35px] z-10 "></div>

      <div className=" px-[1rem] md:container mx-auto">
        <Search />
        <Categories />

        <Carrusel
          title="Casas y departamentos que les encantan a los huéspedes"
          subtitle="Encuentra tu lugar soñado para vacacionar"
          data={data?.hotels}
        />
        <BonusSection
          image={image24}
          title="Consigue descuentos al instante"
          description={textOne}
        />
        <BonusSection
          image={image25}
          title="Registra tu propiedad y empieza a recibir grandes beneficios"
          description={textTwo}
        />
      </div>
    </div>
  );
};
export default Home;
