import React from "react";
import Crewmember from "./Crewmember";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map(actor => <Crewmember crewmember={actor} key={actor.name} />)
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>);
}

export default Actors;
