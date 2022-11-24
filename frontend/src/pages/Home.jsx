import Carrusell from "../components/Carrusell";
import BonusSection from "../components/BonusSection";
import Search from "../components/Search";
import data from "../data/dataImages";
import image24 from '../img/image 24.png'
import image25 from '../img/image 25.png'

const Home = () => {
const textOne = 'Ahorra, iniciando sesión en tu cuenta de SunnyHoliday y encontrarás grandes descuentos.'
const textTwo = 'Registra tu propiedad y ponla en alquiler o en opción de reservación, todo en SunnyHoliday.'
  

  return (
    <div>
      <Search />
      <Carrusell title="Escapadas" data={data} />
      <Carrusell title="Lugares mas recomendados" data={data} />
      <BonusSection image={image24} title='Consigue descuentos al instante' description={textOne}/>
      <BonusSection image={image25} title='Registra tu propiedad y empieza a recibir grandes beneficios' description={textTwo}/>

    </div>
  );
};
export default Home;
