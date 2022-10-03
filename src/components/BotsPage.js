import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] =useState([])
    
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((r) => r.json())
      .then((bots) => setBots(bots ));
  }, []);
  

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots} />
      
    </div>
  )
}

export default BotsPage;
