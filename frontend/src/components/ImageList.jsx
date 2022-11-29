const ImageList = ({ data }) => {
    return (
        <div className='grid grid-cols-2  md:grid-cols-6 auto-rows-[160px] gap-2 py-8'>
            <figure className='col-span-2 row-span-2'>
                <img
                    className='object-cover h-full w-full'
                    src={data[0].url}
                    alt={data[0].title}
                />
            </figure>
            <figure>
                <img
                    className='object-cover h-full w-full'
                    src={data[1].url}
                    alt={data[1].title}
                />
            </figure>
            <figure>
                <img
                    className='object-cover h-full w-full'
                    src={data[2].url}
                    alt={data[2].title}
                />
            </figure>
            <figure>
                <img
                    className='object-cover h-full w-full'
                    src={data[3].url}
                    alt={data[3].title}
                />
            </figure>
            <figure>
                <img
                    className='object-cover h-full w-full'
                    src={data[4].url}
                    alt={data[4].title}
                />
            </figure>
            <figure className='col-span-2'>
                <img
                    className='object-cover w-full h-full'
                    src={data[5].url}
                    alt={data[5].title}
                />
            </figure>
            <figure>
                <img
                    className='object-cover h-full w-full'
                    src={data[5].url}
                    alt={data[5].title}
                />
            </figure>
            <figure>
                <img
                    className='object-cover h-full w-full'
                    src={data[5].url}
                    alt={data[5].title}
                />
            </figure>
        </div>
    );
};

export default ImageList;
