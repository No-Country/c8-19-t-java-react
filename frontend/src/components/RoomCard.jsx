import React from 'react'

const RoomCard = ({data}) => {
  return (
    <div className='px-7 pb-10 pt-4 border border-gray mb-10'>
                        <h3 className='text-blue text-base pb-2 font-medium'>
                            Habitación sencilla doble
                        </h3>
                        <div className='flex flex-col md:flex-row md:justify-between gap-8'>
                            <figure className='max-h-[250px] max-w-[320px] '>
                                <img
                                    className='object-cover w-full h-full'
                                    src={data[0].url}
                                    alt={data[0].title}
                                />
                            </figure>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <p className='text-lg'>Camas</p>
                                    <p className='text-sm text-slate pt-2'>
                                        Matrimoniales
                                    </p>
                                </div>
                                <div>
                                    <p className='text-lg'>Capacidad</p>
                                    <p className='text-sm text-slate pt-2'>
                                        Máximo 4 personas
                                    </p>
                                </div>
                                <div>
                                    <p className='text-lg'>Checking</p>
                                    <p className='text-sm text-slate pt-2'>
                                        Entrada: 15 hr
                                    </p>
                                    <p className='text-sm text-slate'>
                                        Salida: 12 hr
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-lg'>Amenidades</p>
                                <ul className='list-disc text-sm text-slate pt-2'>
                                    <li>Aire Acondicionado</li>
                                    <li>Calefacción</li>
                                    <li>TV satelital</li>
                                    <li>Wifi</li>
                                    <li>Minirefrigerador</li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-lg'>Precio</p>
                                <p className='text-sm text-slate pt-2 pb-7'>
                                    Habitación por noche desde{' '}
                                    <span className='text-blue'>
                                        MXN$ 1,244
                                    </span>
                                    <br /> + MXN$ 236 IVA
                                </p>
                                <button className='text-white w-4/5 text-md rounded bg-blue py-2 hover:bg-blue/90 ease-in duration-100 '>
                                    Reserva
                                </button>
                            </div>
                        </div>
                    </div>
  )
}

export default RoomCard