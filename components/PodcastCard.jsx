import React from "react";
import { FaHeadphones } from "react-icons/fa6";

function PodcastCard(props) {
  return (
    <div className="flex flex-col pl-5 mb-10">
      <div className="flex items-center mb-2">
        <FaHeadphones className="h-5 w-5" />
        <span className="font-xl font-bold text-gray-600 ml-2">
          Podcast Episodes
        </span>
      </div>
      <div className="mb-5">
        <span className="text-2xl flex-wrap font-semibold text-black ">
          Daily News:International Updates
        </span>
      </div>
      <div className="flex items-center mb-4">
        <button className="font-semibold hover:bg-black hover:text-white flex w-fit py-[3px] px-3 text-black bg-white  justify-center rounded-xl border border-[#9B9D9B]">
          Read
        </button>
        <div className="h-1 w-60 bg-slate-600 mx-2"></div>
        <span className="text-sm font-semibold text-black">22:08</span>
      </div>
      <div className="flex items-center mb-8">
        
        <img className="h-7 w-7" src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg" alt="profile-pic"  />
      <span className="text-sm font-semibold text-black ml-2">NEWSIFY Team</span>
      </div>
      <div className="flex flex-col">
        {/* // news pic  */}
        {/*  */}
        <img className="h-[200px] rounded-xl" src={props.image} alt="image-news"/>
        <span className="text-black font-semibold text-sm mt-4"> Breaking News</span>
      </div>
    </div>
  );
}

export default PodcastCard;
