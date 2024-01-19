import BigCard from "@/components/BigCard";
import PodcastCard from "@/components/PodcastCard";
import SmallCard from "@/components/SmallCard";
import axios from "axios";
import Footer from '@/components/Footer'
import React, { useEffect, useState } from "react";

function index() {
  const topics = ["Latest", "World", "Sports", "Culture", "Health", "Economy"];
  const [data, setData] = useState();

  const image =
    "https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg";

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=d777155ce1994c36851888ab019f8c9e")
    .then((response)=>{
      setData(response.data.articles)
    })
    .catch((error)=>console.log(error.message))

  }, [])

  return (
    <div className="bg-white text-black h-[100vh]">
      {/* // topics */}
      <div className="h-[17vh] border-t-[1px] flex justify-center py-8">
        {topics.map((item, index) => {
          return (
            <button
              key={`${index}-${item}`}
              className={`${item === "Latest"? " text-white bg-black":" text-black bg-white"} font-semibold mx-2 hover:bg-black hover:text-white flex w-[100px] h-8 py-[5px] px-5 items-center  justify-center rounded-lg border border-[#9B9D9B]`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* // content  */}
      {data && <div className="flex overflow-scroll">
        <div className="w-1/3 pr-10 ">
          {data.slice(1,4).map((item,index)=>{
            return <PodcastCard key={`${item}-${index}`} image={item.urlToImage} />
          })}
          
        </div>
        <div className="w-1/3 px-10 ">
          {data.slice(4,7).map((item,index)=>{
            return <BigCard key={`${item}-${index}`} image={item.urlToImage} />
          })}
          
        </div>
        <div className="w-1/3 ">
          {data.slice(7,10).map((item,index)=>{
            return <SmallCard key={`${item}-${index}`} image ={item.urlToImage} publishedAt = {item.publishedAt} title = {item.title}/>
          })}
        </div>
      </div>}
      <Footer/>
    </div>
  );
}

export default index;
