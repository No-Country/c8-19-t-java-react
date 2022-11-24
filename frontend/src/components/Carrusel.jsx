import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Carrusel = ({ title, subtitle, data }) => {
  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center md:text-left mb-10">
      <h2 className="text-slate-900 text-2xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-500 text-md mb-6">{subtitle}</p>
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div
            key={index}
            className="max-w-[220px]  overflow-hidden rounded-t-xl shadow-md "
          >
            <figure className="block overflow-hidden">
              <img
                className=" w-full  hover:scale-[1.2] duration-500"
                src={item.url}
                alt={item.title}
              />
            </figure>
            <div className="p-2">
              <h4 className="text-slate-900 text-xl mb-2 font-semibold">
                {item.title}
              </h4>
              <p className="text-gray-500 font-thin text-sm">
                {item.amount} lugares para reservar
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carrusel;
