import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const Carrusel = ({ title, subtitle, data }) => {
  console.log(data);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
    <div className="mb-10">
      <h2 className="text-slate-900 text-2xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-500 text-md mb-6">{subtitle}</p>
      <Slider {...settings}>
        {data?.map((item, index) => (
          <Link to={`/${item._id}`} key={index}>
            <div className="md:max-w-[220px] lg:max-w-[260px] overflow-hidden ">
              <figure className=" overflow-hidden md:h-[200px] lg:h-[220px] rounded-t-xl">
                <img
                  className="w-full h-[100%] object-cover hover:scale-[1.1] duration-500"
                  src={item.pictures[0]}
                  alt={item.title}
                />
              </figure>
              <div className="p-2">
                <h4 className="text-slate-900 text-xl mb-1 font-semibold">
                  {item.title}
                </h4>
                <div>
                  <Rating
                    name="read-only"
                    value={item.rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <p className="text-gray-500 font-thin text-sm">
                  {item.amount} lugares para reservar
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
export default Carrusel;
