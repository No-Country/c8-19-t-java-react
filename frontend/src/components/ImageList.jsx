import { useState } from "react";
import PicturesModal from "./PicturesModal";

const ImageList = ({ pictures }) => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  const handleModal = (index) => {
    setIndex(index);
    setModal(true);
  };

  return (
    <div className="relative">
      {modal && (
        <PicturesModal
          pictures={pictures}
          index={index}
          setModal={setModal}
          setIndex={setIndex}
        />
      )}
      <div className="contenedor grid grid-cols-2 md:grid-cols-6 auto-rows-[160px] gap-2 py-8">
        {pictures.map((picture, index) => (
          <figure onClick={() => handleModal(index)}>
            <img
              className="object-cover h-full w-full"
              src={picture}
              alt={picture}
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
