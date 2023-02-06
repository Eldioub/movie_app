import React from "react";


const MovieCard = ({ movie }) => {
    return(
        <div className='movie'>
            <div>
                <p>{movie.Title}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A'? movie
                .Poster : 'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Year}</h3>
            </div>
        </div>
    );
}

export default MovieCard;