import { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const PicturesModal = ({ pictures, setModal }) => {
  const [index, setIndex] = useState(0);

  console.log(index);

  const handleModalForward = () => {
    setIndex((prev) => prev + 1);
  };

  const handleModalBack = () => {
    if (index === 0) {
      return;
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="fixed flex justify-center items-center bg-slate/40 top-0 left-0 min-h-[100vh] w-full z-40 ">
        <div className="relative  w-[800px]">
          <RiDeleteBack2Fill
            onClick={() => setModal(false)}
            className="text-white text-6xl absolute right-[-1rem] top-[-2rem] z-50 "
          />
          <MdArrowBackIos
            onClick={handleModalBack}
            className="absolute text-white text-6xl  left-[-5rem] top-[35%]  cursor-pointer "
          />
          <MdArrowForwardIos
            onClick={handleModalForward}
            className="absolute text-white text-6xl top-[35%] right-[-5rem] cursor-pointer "
          />
          <div className="flex-col">
            <img
              className="w-full h-[500px] mx-auto mb-4"
              src={pictures[index]}
              alt=""
            />

            <div className="flex items-center gap-2">
              {pictures.map((picture, i) => (
                <img
                  key={i}
                  onClick={() => setIndex(i)}
                  className="w-[200px]"
                  src={picture}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PicturesModal;
