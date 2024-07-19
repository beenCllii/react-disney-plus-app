import axios from '../api/axios';
import React, { useCallback, useEffect, useState } from 'react'

const Row = ({title,id,fetchUrl}) => {

  const [movies,setMovies] = useState([]);

  const fetchMovieDate = useCallback( async () => {
    const responses = await axios.get(fetchUrl);
    setMovies(responses.data.results);
  },[fetchUrl])

  useEffect(()=>{
    fetchMovieDate();
  },[fetchMovieDate])

  
  return (
    <div>
       <h2>{title}</h2>
      <div className='slider'>
        <div className='slider_arrow-left'>
          <span className='arrow'>
            {'<'}
          </span>
        </div>
        <div className='row_posters' id={id}>
          {movies.map(movie=>(
            <img key='{movie.id}' 
            className='row_poster' 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
            alt={movie.id}/>
          ))}
        </div>
        <div className='slider_arrow-right'>
          <span className='arrow'>
            {'>'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Row



