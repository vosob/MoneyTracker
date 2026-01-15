import { FaHouse } from "react-icons/fa6";
import { IoAnalyticsOutline } from "react-icons/io5";

export const Nav = () => {
  return (
    <div>
      <ul className="w-112.5 bg-gradient-to-b from-[#3B5D63] to-[#355359] rounded-xl px-8 py-4 flex flex-col gap-3">
        <li>
          <div className="flex items-center gap-5">
            <div className="bg-[#2a3d43] flex items-center gap-3 px-2 py-2 rounded-lg">
              <FaHouse />
            </div>
            <span>Home</span>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-5">
            <div className="bg-white/15 flex items-center gap-3 px-2 py-2 rounded-lg">
              <IoAnalyticsOutline />
            </div>
            <span>Statistics</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
