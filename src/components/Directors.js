import React from "react";
import Crewmember from "./Crewmember";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map(director => <Crewmember crewmember={director} key={director.name} />)

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>);
}

export default Directors;
