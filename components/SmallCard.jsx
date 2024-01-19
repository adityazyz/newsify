import React, { useEffect, useState } from 'react'

function SmallCard(props) {

    const [myDate, setMyDate] = useState();

    useEffect(() => {
        const stringToDate = (dateString) => {
            const dateObject = new Date(dateString);
            if (isNaN(dateObject.getTime())) {
              return null;
            }
            return dateObject;
          }
          
          const toWordDate = (date) => {
            if(date && date.length > 0){
                const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const dateString = date.toLocaleDateString(undefined, options);
            return dateString;
            }
          }

          let mydate = stringToDate(props.publishedAt);
          let finaldate = toWordDate(mydate);
          setMyDate(finaldate);

    }, [])
    

  return (
    <div className='flex flex-col px-10 mb-10'>
        <div>
            <img className='h-[200px] rounded-xl' src={props.image} alt="news-image"/>
        </div>
        <div className='my-3'>
            <span className="text-black font-semibold text-sm mt-4"> NEWS</span>
        </div>
        <div>
        <span className="text-2xl flex-wrap font-semibold text-black ">
          {props.title} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quis architecto
        </span>
        </div>
        <div className='mb-1 flex justify-between'>
            <span className="text-black font-semibold text-sm mt-4"> NEWSIFY</span>
            <span className="text-black font-semibold text-sm mt-4">{myDate}</span>
        </div>
       
    </div>
  )
}

export default SmallCard