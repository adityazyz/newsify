import React from 'react'

function BigCard(props) {
  return (
    <div className='flex flex-col items-center mb-10'>
        <div>
            <img className='h-[200px] rounded-xl' src={props.image} alt="news-image"/>
        </div>
        <div className='my-3'>
            <span className="text-black font-semibold text-sm mt-4"> NEWSIFY</span>
        </div>
        <div>
        <span className="text-2xl flex-wrap font-semibold text-black ">
          Top Stories of the Day
        </span>
        </div>
        <div className='mt-6'>
            <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas consequuntur hic tempora. Voluptas ut repellat fuga sint dolor dolorum similique voluptate vero atque, porro rem debitis mollitia minus sit aspernatur id inventore quos,
            </span>
        </div>
    </div>
  )
}
export default BigCard