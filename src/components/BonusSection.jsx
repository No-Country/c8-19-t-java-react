const BonusSection = ({ image, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row   mx-auto mb-6 border  border-[#979797]  gap-4">
      <figure className="h-[200px]">
        <img
          src={image}
          alt="imagen descuentos"
          className=" h-full w-full object-cover "
        />
      </figure>
      <div className="py-5 px-4">
        <h3 className="text-lg font-medium text-[#515252]">{title}</h3>
        <p className="text-[15px] text-[#979797]">{description}</p>
        <div className="flex gap-5 pt-8 justify-center md:justify-start">
          <button className="text-xs text-[#4B84F1] border border-[#4B84F1] px-5 py-2  hover:bg-blue-300 ease-in duration-100">
            Inicia sesión
          </button>
          <button className="text-xs text-[#4B84F1] border border-[#4B84F1] px-5 py-2  hover:bg-blue-300 ease-in duration-100">
            Regístrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
