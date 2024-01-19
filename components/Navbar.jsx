import React, { useState } from "react";

function Navbar() {
    const [searchItem, setSearchItem] = useState("");
  return (
    <div className="sticky top-0 h-[11vh]  flex items-center bg-white">
      <ul className="flex j  w-full justify-between px-5">
        <li>
          <h1 className="text-3xl text-black font-extrabold">Welcome to Newsify</h1>
        </li>
        <li className="ml-2 flex">
          <div className="flex bg-white w-fit justify-center h-9 mr-8 rounded-lg border border-gray-300">
            <input
              className="focus:outline-none rounded-lg text-black  border-none  w-[200px] py-2 px-2  "
              type="text"
              placeholder="Search"
              value={searchItem}
              onChange={(e)=>{setSearchItem(e.target.value)}}
            />

            <span className=" mx-2 mt-2">
              <svg
                width="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z"
                  fill="#0D0D0D"
                />
              </svg>
            </span>
          </div>
          <div className="flex justify-center items-center">
          <button className="font-semibold hover:bg-black hover:text-white mx-4 flex w-[110px] py-[5px] px-5 text-black bg-white  justify-center rounded-xl border border-[#9B9D9B]">
                    Sign In
            </button>
            <button className="font-semibold hover:bg-black hover:text-white flex w-[110px] py-[5px] px-5 text-black bg-white  justify-center rounded-xl border border-[#9B9D9B]">
                    Subscribe
            </button>
          </div>
        </li>

      </ul>
    </div>
  );
}
export default Navbar;
