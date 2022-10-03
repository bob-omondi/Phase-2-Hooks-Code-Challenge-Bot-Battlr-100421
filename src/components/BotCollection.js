import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot, dischargeBot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard
            bot={bot}
            botCard={addBot}
            handleDischargeBot={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;