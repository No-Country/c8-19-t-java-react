import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" w-full  py-10 border-t border-blue">
      <div className="md:container flex flex-wrap gap-6 justify-around md:justify-between">
        <div className="bg-white">
          <h3 className="text-md text-blue font-medium">Servicio al cliente</h3>
          <div className="">
            <p className="text-xs pt-4 text-[#515252]">Ayuda</p>
            <p className="text-xs pt-4 text-[#515252]">Información COVID</p>
            <p className="text-xs pt-4 text-[#515252]">Factura electrónica</p>
            <p className="text-xs pt-4 text-[#515252]">Consutar reservación</p>
            <p className="text-xs pt-4 text-[#515252]">Consultar alquiler</p>
            <p className="text-xs pt-4 text-[#515252]">Cancelaciones</p>
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="text-[15px] text-[#4B84F1] font-medium">
            Acerca de nosotros
          </h3>
          <div className="">
            <p className="text-xs pt-4 text-[#515252]">Nuestra historia</p>
            <p className="text-xs pt-4 text-[#515252]">Sala de prensa</p>
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="text-md text-[#4B84F1] font-medium">Proveedores</h3>
          <p className="text-xs pt-4  text-[#515252]">Registra tu propiedad</p>
        </div>

        <div>
          <h3 className="text-md text-[#4B84F1] font-medium">Contáctanos</h3>
          <div className="flex">
            <div className=" pt-4 ">
              <p className="text-xs text-[#515252] font-semibold">México </p>
              <p className="text-xs pt-4 text-[#515252] font-semibold">
                Colombia
              </p>
              <p className="text-xs pt-4 text-[#515252] font-semibold">
                Otros países
              </p>
            </div>

            <div className="pt-4">
              <p className="text-xs text-[#4B84F1] font-medium">55 59845874</p>
              <p className="text-xs text-[#4B84F1] pt-4 font-medium">
                +57 1 75882255
              </p>
              <p className="text-xs text-[#4B84F1] pt-4 font-medium">
                +52 998 894 8547
              </p>
            </div>
          </div>
          <p className="text-xs text-[#4B84F1] pt-4 font-medium">
            contact@sunnyholidays.com.mx
          </p>
          <div className="flex justify-between pt-4">
            <BsFacebook className="w-8 h-8" />
            <AiFillTwitterCircle className="w-9 h-9" />
            <AiFillInstagram className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;