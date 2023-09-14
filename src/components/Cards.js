import React, { useState } from 'react'
import Card from './Card'
export default function Cards({cards,removeCard}) {
  return (
    <div className='flex flex-wrap w-[100vw] justify-center gap-6 mt-10'>
    {
      cards.map((card)=>{
        return <Card key={card.id} card={card} removeCard={removeCard}/>
      })
    }
    </div>
  )
}
