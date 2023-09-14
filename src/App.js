import React, { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import data from "./data";
const App = () => {
  const[cards,setCards]=useState(data);
  function removeCard(id){
    const newcards = cards.filter((card)=>card.id!==id);
    setCards(newcards);
  }
  function refreshHandler(){
    setCards(data); 
  }
  if(cards.length==0){
    return(
      <div className="h-[100vh] w-[100vw] flex flex-col gap-3 justify-center items-center">
        <h2 className="text-[1.5rem] font-[700]">No Tours Left</h2>
        <button className="bg-gray-100 w-[200px] h-[40px]" onClick={refreshHandler}>Refresh</button>
      </div>
    )
  }
  return (
  <div>
    <Header/>
    <Cards cards={cards} removeCard={removeCard}/>
  </div>
  );
};

export default App;
