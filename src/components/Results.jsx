import { SlArrowDown} from 'react-icons/sl';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useGetAllHotelsQuery } from '../redux/api/sunnyApi';
import CardHotel from './CardHotel';

const Results = ({ onToggleFilters, viewFilters }) => {
    const { data, isLoading } = useGetAllHotelsQuery();

    console.log(data);

    return (
        <div className='flex flex-col gap-10 px-4 md:px-0 md:gap-4'>
            <button
                onClick={onToggleFilters}
                className='md:hidden flex rounded-lg bg-white gap-2 px-4 py-2 text-[#979797] capitalize font-semibold justify-between items-center cursor-pointer border border-[#979797] hover:bg-gray'
            >
                filtrar{' '}
                {viewFilters ? <IoMdClose className='text-[#979797] font-medium text-xl' /> : <SlArrowDown className='text-[#979797] font-medium text-xl' /> }
                
                
            </button>
            <div className='hidden md:flex rounded-lg bg-white gap-2 px-2  text-slate capitalize font-semibold justify-between items-center '>
                <span className='font-thin basis-1/4 text-center py-4'>
                    Ordenar:
                </span>
                <div className='basis-2/4 border-l  py-4 border-slate/10      text-center '>
                    precio
                </div>
                <div className='basis-2/4 border-l  py-4 border-slate/10     text-center'>
                    mejor valorado
                </div>
                <div className='basis-2/4 border-l  py-4 border-slate/10     text-center'>
                    recomandado
                </div>
            </div>
            {data?.hotels.map(hotel => (
                <Link key={hotel._id} to={`/${hotel._id}`}>
                    <CardHotel key={hotel._id} hotel={hotel} />
                </Link>
            ))}
        </div>
    );
};
export default Results;
