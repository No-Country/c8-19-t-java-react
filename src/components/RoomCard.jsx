import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useAddHotelDatesMutation } from "../redux/api/sunnyApi";

const RoomCard = ({ room }) => {
  const [openCalendar, setOpenCalendar] = useState(false);

  console.log(room);

  const [addHotelsDates, result] = useAddHotelDatesMutation();

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleClick = () => {
    addHotelsDates({
      id: room._id,
      dates: [date[0].startDate, date[0].endDate],
    });
  };

  console.log(result);

  return (
    <section className="bg-gray">
      <div className="md:container">
        <div className="px-3 lg:px-7 pb-10 pt-4 border border-gray mb-10">
          <h3 className="text-blue text-base pb-2 font-medium">{room.title}</h3>
          <div className="flex  flex-wrap justify-center sm:flex-nowrap sm:flex-row sm:justify-between gap-8">
            <figure className="max-h-[100%] max-w-[320px] ">
              <img
                className="object-cover w-full h-full"
                src={room?.pictures[0]}
                alt={room?.title}
              />
            </figure>
            <div className="flex flex-col w-full gap-6">
              <div className="flex gap-4">
                <div>
                  <p className="text-lg">Camas</p>
                  <p className="text-sm text-slate pt-2">Matrimoniales</p>
                </div>
                <div>
                  <p className="text-lg">Capacidad</p>
                  <p className="text-sm text-slate pt-2">Máximo 4 personas</p>
                </div>
                <div>
                  <p className="text-lg">Checking</p>
                  <p className="text-sm text-slate pt-2">Entrada: 15 hr</p>
                  <p className="text-sm text-slate">Salida: 12 hr</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-lg">Amenidades</p>
                <ul className="flex flex-wrap gap-2 list-none text-sm text-slate pt-2">
                  <li>Aire Acondicionado</li>
                  <li>Calefacción</li>
                  <li>TV satelital</li>
                  <li>Wifi</li>
                  <li>Minirefrigerador</li>
                </ul>
              </div>
              <div>
                <p className="text-lg">Precio</p>
                <p className="text-sm text-slate pt-2 ">
                  Habitación por noche desde{" "}
                  <span className="text-blue">MXN$ 1,244</span>
                  <br /> + MXN$ 236 IVA
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="text-white w-full md:w-4/5 text-md rounded bg-blue  py-2 hover:bg-blue/90 ease-in duration-100 "
              >
                Reserva
              </button>

              {/* <button onClick={() => setOpenCalendar((prev) => !prev)}>
                  reservar Fechas
                </button> */}
              <div className="relative">
                <DateRange
                  className=" top-0 z-40 right-0"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomCard;
