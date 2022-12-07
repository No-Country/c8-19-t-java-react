import { CircularProgress, Rating } from "@mui/material";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { ImQuotesLeft } from "react-icons/im";
import { useSelector } from "react-redux";
import { useCreateCommentMutation } from "../redux/api/sunnyApi";
import LoginModal from "./LoginModal";
import RatingComponent from "./RatingComponent";

const Comments = ({ data }) => {
  const [comment, setComment] = useState("");
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [buttonClicked, setbuttonClicked] = useState(false);

  const user = useSelector((state) => state.auth);

  const [createComment, { data: aux, isLoading, error }] =
    useCreateCommentMutation();

  console.log(aux);

  const handleSubmit = (e) => {
    e.preventDefault();
    setbuttonClicked(true);

    if (!user.token) {
      console.log("debes estar autenticado");
      return;
    }

    const newComment = {
      id: data._id,
      comment,
      rating: value,
      name: user.user,
    };

    createComment(newComment);

    // if (!isLoading) e.target.reset();
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
          <div className="relative w-full sm:w-[50%]">
            <input
              type="text"
              name="comment"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Deja un comentario"
              className="bg-white w-full mt-2 border border-slate/20  rounded-lg p-2 outline-blue"
            />

            {buttonClicked && !user.token && <LoginModal />}

            <button
              disabled={isLoading}
              onClick={handleSubmit}
              className="flex justify-center items-center absolute right-0 bottom-0  bg-blue h-[44px] w-[60px]  p-2  rounded-r-lg cursor-pointer hover:bg-blue/80 duration-300  text-white "
            >
              {isLoading ? (
                <CircularProgress
                  size="1rem"
                  sx={{ color: "rgba(255,255,255,.9)" }}
                />
              ) : (
                <BiSearch className="text-xl " />
              )}
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-3 py-5 gap-4">
        {data?.comments?.map((item) => (
          <div
            key={item._id}
            className="border border-slate/20 p-4 rounded-md hover:shadow-md duration-300"
          >
            <ImQuotesLeft className="text-xl text-slate mb-1" />
            <h3 className="text-md font-medium text-slate mb-1">
              {item.user.name}
            </h3>
            <Rating
              name="read-only"
              sx={{ fontSize: "1.6rem", color: "#FCDB8A" }}
              value={item.rating}
              precision={0.5}
              readOnly
            />

            <p key={item._id} className="text-smd text-slate pt-2">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
