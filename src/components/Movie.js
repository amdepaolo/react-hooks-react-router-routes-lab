import React from "react";

function Movie({movie}){
    const {title, time, genres} = movie;
    const genreList = genres.map(genre => <li key={genre}>{genre}</li>);

    return(
        <div>
            <h2>{title}</h2>
            <p>Time: {time}</p>
            <ul>
                {genreList}
            </ul>
        </div>
    )
}

export default Movie