const ImageList = ({ pictures }) => {
  console.log(pictures);
  return (
    <div className="grid grid-cols-2  md:grid-cols-6 auto-rows-[160px] gap-2 py-8">
      <figure className="col-span-2 row-span-2">
        <img
          className="object-cover h-full w-full"
          src={pictures[0]}
          alt={pictures[0]}
        />
      </figure>
      <figure>
        <img
          className="object-cover h-full w-full"
          src={pictures[1]}
          alt={pictures[1]}
        />
      </figure>
      <figure>
        <img
          className="object-cover h-full w-full"
          src={pictures[2]}
          alt={pictures[2]}
        />
      </figure>
      <figure>
        <img
          className="object-cover h-full w-full"
          src={pictures[3]}
          alt={pictures[3]}
        />
      </figure>
      <figure>
        <img
          className="object-cover h-full w-full"
          src={pictures[4]}
          alt={pictures[4]}
        />
      </figure>
      <figure className="col-span-2">
        <img
          className="object-cover w-full h-full"
          src={pictures[5]}
          alt={pictures[5]}
        />
      </figure>
      <figure>
        <img
          className="object-cover h-full w-full"
          src={pictures[3]}
          alt={pictures[5]}
        />
      </figure>
      <figure>
        <img
          className="object-cover h-full w-full"
          src={pictures[1]}
          alt={pictures[5]}
        />
      </figure>
    </div>
  );
};

export default ImageList;
