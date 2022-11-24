import { useGetAllPropertiesQuery } from "../redux/api/propertiesApi";
import Carrusel from "../components/Carrusel";
import BonusSection from "../components/BonusSection";
import Search from "../components/Search";
import image24 from "../img/image 24.png";
import image25 from "../img/image 25.png";

const Home = () => {
  const { data } = useGetAllPropertiesQuery();
  console.log(data);

  return (
    <div className="">
      <div className="bg-hero min-h-[40vh]  bg-cover bg-center mb-[-35px] z-10 "></div>

      <div className="max-w-[1138px] mx-auto">
        <Search />
        <Carrusel
          title="Escapadas"
          subtitle="Destinos en Mexico que tienne mucho para ofrecer"
          data={data}
        />
        <Carrusel
          title="Casas y departamentos que les encantan a los huéspedes"
          data={data}
        />
      </div>
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
  );
};
export default Home;
