import React from "react";

function Crewmember({crewmember}) {
    const {name, movies} =crewmember;
    const moviesList = movies.map(movie => <li key={movie}>{movie}</li>);

    return(
        <div>
            <h2>{name}</h2>
            <ul>
                {moviesList}
            </ul>
        </div>
    )
}

export default Crewmember;