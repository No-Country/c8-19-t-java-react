import { useGetAllPropertiesQuery } from '../redux/api/propertiesApi';
import { AiFillStar, AiOutlineWifi } from 'react-icons/ai';
import { BiBath } from 'react-icons/bi';
import Search from '../components/Search';
import ImageList from '../components/ImageList';
import RoomCard from '../components/RoomCard';
import Comments from '../components/Comments';

const PlaceDetails = () => {
    const { data } = useGetAllPropertiesQuery();

    return (
        <div className='px-[1rem] md:container pt-20 md:pt-28'>
            <Search />
            {data && (
                <>
                    <div className='flex items-baseline'>
                        <h2 className='text-3xl text-black '>
                            Fiesta Inn, Oaxaca
                        </h2>
                        <div className='flex gap-1 pl-5'>
                            <AiFillStar className='text-orange-400' />
                            <AiFillStar className='text-orange-400' />
                            <AiFillStar className='text-orange-400' />
                            <AiFillStar className='text-orange-400' />
                            <AiFillStar className='text-orange-400' />
                        </div>
                    </div>
                    <p className='text-sm text-slate pt-2.5'>
                        Habitación por noche desde{' '}
                        <span className='text-blue'>MXN$ 1,244</span> + MXN$ 236
                        IVA
                    </p>
                    <ImageList data={data} />
                    <h3 className='text-lg text-slate mb-8'>
                        Elige tu habitación en Fiesta Inn Oaxaca
                    </h3>
                    <RoomCard data={data} />
                    <Comments/>
                </>
            )}
        </div>
    );
};
export default PlaceDetails;
