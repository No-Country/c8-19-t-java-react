import { AiFillStar} from 'react-icons/ai';

const Comments = () => {
    return (
        <section className='mb-10'>
            <div className='flex items-baseline'>
                <h2 className='text-lg text-slate mb-8 '>Opiniones</h2>
                <div className='flex gap-1 pl-5'>
                    <AiFillStar className='text-orange-400' />
                    <AiFillStar className='text-orange-400' />
                    <AiFillStar className='text-orange-400' />
                    <AiFillStar className='text-orange-400' />
                    <AiFillStar className='text-orange-400' />
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 border border-gray px-10 py-5 gap-4'>
                <div className='border border-orange-400 p-4'>
                    <h3 className='text-sm font-medium text-slate'>Lorem</h3>
                    <p className='text-xs text-slate pt-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Natus beatae vitae expedita
                    </p>
                </div>
                <div className='border border-orange-400 p-4'>
                    <h3 className='text-sm font-medium text-slate'>Lorem</h3>
                    <p className='text-xs text-slate pt-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Natus beatae vitae expedita sapiente sequi tempora
                        dolores deserunt placeat ?
                    </p>
                </div>
                <div className='border border-orange-400 p-4'>
                    <h3 className='text-sm font-medium text-slate'>Lorem</h3>
                    <p className='text-xs text-slate pt-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className='border border-orange-400 p-4'>
                    <h3 className='text-sm font-medium text-slate'>Lorem</h3>
                    <p className='text-xs text-slate pt-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Natus beatae vitae expedita sapiente sequi tempora
                        dolores.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Comments;
