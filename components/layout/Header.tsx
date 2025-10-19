import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import CategoryIcons from "./CategoryIcons";
import { CATEGORYICONS } from "@/constants";

const Header: React.FC = () => {
  return (
    <header className="absolute w-full bg-[#FFFFFF]">
      <nav className="sticky top-0 bg-[#FFFFFF] z-[999] border-b border-[#EBEBEB] py-3 px-3">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Image
              src={"/assets/icon/alx-logo.png"}
              alt="ALX Logo"
              width={58}
              height={40}
            />
          </div>

          <div className="flex justify-between h-full border border-[#F6F6F6] rounded-full py-2 pl-8 pr-[.6875rem]">
            <div className="space-y-1 min-w-72">
              <h6 className="text-sm">Location</h6>
              <input
                type="text"
                placeholder="Search for destination"
                className="outline-none min-w-0 text-[.8125rem]"
              />
            </div>

            {/* Right side search input field */}
            <div className="flex items-center">
              <div className="flex items-center gap-5 h-full">
                <div className="w-px h-full bg-[#E9E9E9]" />
                <div className="flex flex-col space-y-1">
                  <label className="text-sm w-fit">Check in</label>
                  <input
                    type="text"
                    className="outline-none text-[.8125rem]"
                    placeholder="Add date"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 h-full">
                <div className="w-px h-full bg-[#E9E9E9]" />
                <div className="space-y-1">
                  <h6 className="text-sm">Check out</h6>
                  <input
                    type="text"
                    className="outline-none min-w-0 text-[.8125rem]"
                    placeholder="Add date"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 h-full">
                <div className="w-px h-full bg-[#E9E9E9]" />
                <div className="space-y-1 w-fit">
                  <h6 className="text-sm">People</h6>
                  <input
                    type="text"
                    className="outline-none min-w-0 text-[.8125rem]"
                    placeholder="Add guest"
                  />
                </div>
              </div>
              <div className="rounded-full size-10.5 bg-[#FFA800] p-2 ml-4 flex items-center justify-center cursor-pointer">
                <CiSearch className="text-white size-full" />
              </div>
            </div>
          </div>
          <div className="space-x-2">
            <button
              type="button"
              className="bg-[#34967C] py-3 px-7 rounded-full text-white"
            >
              Sign in
            </button>
            <button
              type="button"
              className="py-3 px-7 rounded-full border border-[#ECECEC]"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <div className="sticky -top-10 container mx-auto flex items-center justify-between px-3 lg:px-0 overflow-x-auto gap-8 py-4">
        {
            CATEGORYICONS.map((item, index) => (
                <CategoryIcons key={index} icon={item.icon} label={item.label} active={index === 3} />
            ))
        }
      </div>
    </header>
  );
};

export default Header;
