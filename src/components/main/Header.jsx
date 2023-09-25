import { BiSolidBell } from "react-icons/bi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  return (
    <div className=" flex justify-between my-10 mx-5">
      <div className="flex items-center gap-5">
        {" "}
        <button>
          {" "}
          <HiOutlineArrowLeft size={20} className="text-primary" />
        </button>
        <h1 className="text-4xl font-semibold">Players</h1>
      </div>
      {/* user info */}
      <div className="flex items-center gap-5">
        <button>
          <HiMiniMagnifyingGlass size={20} className="text-primary" />
        </button>
        <button>
          {" "}
          <BiSolidBell size={20} className="text-primary" />
        </button>
        <img
          className="h-10 w-10 rounded-full border-2 border-primary"
          src="https://luxuo-com-production.s3.ap-southeast-1.amazonaws.com/2022/05/1-Comb-Over.jpg"
          alt=""
        />
        <p className="font-medium">Andrea Pirlo</p>
      </div>
    </div>
  );
};

export default Header;
