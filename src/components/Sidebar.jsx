import { HiSquares2X2 } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { MdCalendarMonth } from "react-icons/md";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { BiSolidChart } from "react-icons/bi";

const Sidebar = () => {
    
  const items = [
    {
      key: 1,
      label: "Dashboard",
      icon: <HiSquares2X2 />,
    },
    {
      key: 2,
      label: "Squad",
      icon: <FaUsers />,
    },
    {
      key: 3,
      label: "Messenger",
      icon: <BsFillChatDotsFill />,
    },
    {
      key: 4,
      label: "Statistic",
      icon: <BiSolidBarChartSquare />,
    },
    {
      key: 5,
      label: "Calender",
      icon: <MdCalendarMonth />,
    },
  ];
  return (
    <aside className="border-r border-primary border-opacity-50 sticky h-screen overscroll-y-auto">
      <h2 className="text-2xl font-bold p-8">
        Coach<span className="font-normal">Pro</span>
      </h2>
      <div className="flex flex-col gap-10">
        {items.map((item) => (
          <div key={item.key}>
            <a
              className="flex items-center gap-4 px-8 text-base font-medium text-primary"
              href={`/${item.label}`}
            >
              {item.icon} {item.label}
            </a>
          </div>
        ))}
        <div className="border-t border-primary border-opacity-50 mx-4"></div>
        <div className="flex flex-col gap-10">
          <a
            className="flex items-center gap-4 px-8 text-base font-medium text-primary"
            href="/"
          >
            <RiArrowLeftRightFill />
            Transfer
          </a>
          <a
            className="flex items-center gap-4 px-8 text-base font-medium text-primary"
            href="/"
          >
            <BiSolidChart />
            Youth academy
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
