import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, getMyArmy }) {
 

  const botCollection = bots.map((bot) => {
    return <BotCard getMyArmy={getMyArmy} key={bot.id} bot={bot} />;
  });

  return (
    <div className="ui four column grid">
      <div className="row">{botCollection}</div>
    </div>
  );
}

export default BotCollection;
