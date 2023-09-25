import player from "../../assets/player.png";

const Card = () => {
  return (
    <div className="mt-10">
      <div className="flex items-start shadow-xl bg-[#dbeaeb] border-t border-l border-white rounded-3xl relative w-[35rem] pt-4 mx-5 ">
        {/* image */}
        <img
          className="w-[10rem] h-[10rem] drop-shadow-[0px_5px_20px_rgba(156,151,151,1)] ml-4"
          src={player}
          alt=""
        />
        {/* info */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4">
            <p className="text-lg font-medium">
              Paulo <span className="block font-semibold">Dybala</span>
            </p>
            <p
              className="text-4xl absolute right-10 font-bold text-transparent"
              style={{ WebkitTextStroke: "1px black" }}
            >
              {" "}
              10
            </p>
          </div>

          <div className="flex gap-5 px-4 mt-5">
            <p className="uppercase font-medium tracking-wide">
              age <span className="font-semibold block">28</span>{" "}
            </p>
            <p className="uppercase font-medium tracking-wide">
              nationality <span className="font-semibold block">Argentina</span>{" "}
            </p>
            <p className="uppercase font-medium tracking-wide">
              position <span className="font-semibold block">ss</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
