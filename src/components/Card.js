import React, { useState } from 'react'

export default function Card({card,removeCard}) {
  const[description,setDescription]=useState(`${card.info.substring(0,200)}...`);
  const[clicked,setClicked]=useState(false);
  function falseHandler(){
    setClicked(false);
  }
  function trueHandler(){
    setClicked(true);
  }
  return (
    <div>
          <div key={card.id} className='flex flex-col min-h-[600px] w-[380px] border-[2px] rounded-lg py-4 px-3 
           shadow-2xl ' >
            <img src={card.image} className='w-[360px] h-[320px]'/>
            <span>${card.price}</span>
            <div>{card.name}</div>
            <div>
            {
            (clicked)?<div>
              {card.info}
              <span className='text-blue-400' onClick={falseHandler}> Show Less</span>
            </div>:
            <div>
              {description}
              <span className='text-blue-400' onClick={trueHandler}> Read More</span>
            </div>
            }</div>
            <button className='border-[1px] rounded-lg border-red-700 bg-red-100 h-[40px] w-[300px] mx-auto mt-8 font-[600] text-lg'
            onClick={()=>removeCard(card.id)}>Not Interested</button>
          </div>
    </div>
  )
}
