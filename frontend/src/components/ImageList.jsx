import { useState } from "react";
import PicturesModal from "./PicturesModal";

const ImageList = ({ pictures }) => {
  const [modal, setModal] = useState(false);

  console.log(modal);

  return (
    <div className="relative">
      {modal && <PicturesModal setModal={setModal} pictures={pictures} />}
      <div className=" grid grid-cols-2  md:grid-cols-6 auto-rows-[160px] gap-2 py-8">
        <figure
          onClick={() => setModal(true)}
          className="col-span-2 row-span-2"
        >
          <img
            className="object-cover h-full w-full"
            src={pictures[0]}
            alt={pictures[0]}
          />
        </figure>
        <figure onClick={() => setModal(true)}>
          <img
            className="object-cover h-full w-full"
            src={pictures[1]}
            alt={pictures[1]}
          />
        </figure>
        <figure onClick={() => setModal(true)}>
          <img
            className="object-cover h-full w-full"
            src={pictures[2]}
            alt={pictures[2]}
          />
        </figure>
        <figure onClick={() => setModal(true)}>
          <img
            className="object-cover h-full w-full"
            src={pictures[3]}
            alt={pictures[3]}
          />
        </figure>
        <figure onClick={() => setModal(true)}>
          <img
            className="object-cover h-full w-full"
            src={pictures[4]}
            alt={pictures[4]}
          />
        </figure>
        <figure onClick={() => setModal(true)} className="col-span-2">
          <img
            className="object-cover w-full h-full"
            src={pictures[5]}
            alt={pictures[5]}
          />
        </figure>
        <figure onClick={() => setModal(true)}>
          <img
            className="object-cover h-full w-full"
            src={pictures[6]}
            alt={pictures[6]}
          />
        </figure>
        <figure onClick={() => setModal(true)}>
          <img
            className="object-cover h-full w-full"
            src={pictures[7]}
            alt={pictures[7]}
          />
        </figure>
      </div>
    </div>
  );
};

export default ImageList;
