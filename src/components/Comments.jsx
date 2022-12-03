import { Rating } from "@mui/material";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { ImQuotesLeft } from "react-icons/im";
import { useSelector } from "react-redux";
import RatingComponent from "./RatingComponent";

const Comments = ({ rating }) => {
  const [comment, setComment] = useState("");
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  console.log(rating);

  const user = useSelector((state) => state.auth);

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    console.log(value);
    if (!user.token) {
      // navigate("/login");
      return;
    }

    createReview({
      id: data._id,
      user: user?.name,
      comment,
      value,
    });

    if (!isLoading) e.target.reset();
  };

  return (
    <section className=" md:container mb-10 ">
      <h2 className="text-lg text-slate mb-4 ">Comentarios y valoraciones:</h2>
      <form action="POST">
        <div className="relative">
          <label htmlFor="comment" className="block">
            Deja una reseña
          </label>
          <RatingComponent
            value={value}
            setValue={setValue}
            hover={hover}
            setHover={setHover}
          />
          <div className="relative w-[50%]">
            <input
              type="text"
              name="comment"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Deja un comentario"
              className="bg-white w-full mt-2 border border-slate/20  rounded-lg p-2 outline-blue"
            />

            <BiSearch
              onClick={handleSubmit}
              className="absolute right-0 bottom-0  bg-blue h-[44px] w-20 p-2  rounded-r-lg cursor-pointer hover:bg-blue/80 duration-300  text-white "
            />
          </div>
        </div>
      </form>

      <div className="grid grid-cols-3 py-5 gap-4">
        <div className="border border-slate/20 p-4 rounded-md hover:shadow-md duration-300">
          <ImQuotesLeft className="text-xl text-slate mb-1" />
          <h3 className="text-md font-medium text-slate mb-1">Lorem</h3>
          <Rating
            name="read-only"
            sx={{ fontSize: "1.6rem", color: "#FCDB8A" }}
            value={rating}
            precision={0.5}
            readOnly
          />

          <p className="text-smd text-slate pt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            beatae vitae expedita
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comments;
