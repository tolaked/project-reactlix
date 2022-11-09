import React from 'react'

const Movie = ({movie}: any) => {
   
  return (
    <>
        <div>Showing 12 movies</div>
              <div key={movie.title} className='movie'>
                <h2 className='movie-title'>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>Rating: 7/10</p>
                <p>Popularity: 2407.318</p>
              </div>
      </>
  )
}

export default Movie