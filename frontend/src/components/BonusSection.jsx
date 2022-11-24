

const BonusSection = ({image, title, description}) => {
    return (
        <div className='max-w-[1138px] mx-auto mb-6 border border-[#979797] flex'>
            <img src={image} alt='imagen descuentos' className='pl-2.5 pr-3 py-5' />
            <div className='pt-5'>
              <h3 className='text-lg font-medium text-[#515252]'>{title}</h3>
              <p className='text-[15px] text-[#979797]'>{description}</p>
            <div className='flex gap-5 pt-8'>
              <button className='text-[10px] text-[#4B84F1] border border-[#4B84F1] px-5 py-2  hover:bg-blue-300 ease-in duration-100'>Inicia sesión</button>
              <button className='text-[10px] text-[#4B84F1] border border-[#4B84F1] px-5 py-2  hover:bg-blue-300 ease-in duration-100' >Regístrate</button>
            </div>
            </div>
        </div>
    );
};

export default BonusSection;
