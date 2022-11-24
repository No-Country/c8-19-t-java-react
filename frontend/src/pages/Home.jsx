import { useGetAllPropertiesQuery } from '../redux/api/propertiesApi';
import Carrusell from '../components/Carrusell';
import BonusSection from '../components/BonusSection';
import Search from '../components/Search';
import image24 from '../img/image 24.png';
import image25 from '../img/image 25.png';

const Home = () => {
    const { data } = useGetAllPropertiesQuery();
    console.log(data);

    const textOne =
        'Ahorra, iniciando sesión en tu cuenta de SunnyHoliday y encontrarás grandes descuentos.';
    const textTwo =
        'Registra tu propiedad y ponla en alquiler o en opción de reservación, todo en SunnyHoliday.';

    return (
        <div>
            <div className='bg-hero min-h-[40vh]  bg-cover bg-center mb-[-35px] z-10 '></div>

            <div className='md:container'>
                <Search />
                <Carrusell
                    title='Escapadas'
                    subtitle='Destinos en Mexico que tienne mucho para ofrecer'
                    data={data}
                />
            </div>
            <BonusSection
                image={image24}
                title='Consigue descuentos al instante'
                description={textOne}
            />
            <BonusSection
                image={image25}
                title='Registra tu propiedad y empieza a recibir grandes beneficios'
                description={textTwo}
            />
        </div>
    );
};
export default Home;
