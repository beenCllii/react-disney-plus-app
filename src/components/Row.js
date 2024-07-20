import axios from '../api/axios';
import React, { useCallback, useEffect, useState } from 'react'
import './Row.css'
import MovieModal from './MovieModal';

const Row = ({title,id,fetchUrl}) => {

  const [movies,setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieDate = useCallback( async () => {
    const responses = await axios.get(fetchUrl);
    setMovies(responses.data.results);
  },[fetchUrl])

  useEffect(()=>{
    fetchMovieDate();
  },[fetchMovieDate])

  const handleClick = (movie) => {
     setModalOpen(true);
     setMovieSelected(movie);
  }

  
  return (
    <div>
       <h2>{title}</h2>
      <div className='slider'>
        <div className='slider_arrow-left'>
          <span className='arrow' 
          onClick={()=>{document.getElementById(id).scrollLeft -= window.innerWidth - 80}}>
            {'<'}
          </span>
        </div>
        <div className='row_posters' id={id}>
          {movies.map(movie=>(
            <img key='{movie.id}' 
            className='row_poster' 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
            alt={movie.id}
            onClick={()=> handleClick(movie)}/>
          ))}
        </div>
        <div className='slider_arrow-right'>
          <span className='arrow' 
          onClick={()=>{document.getElementById(id).scrollLeft += window.innerWidth - 80}}>
            {'>'}
          </span>
        </div>
      </div>

      {setModalOpen && 
      <MovieModal {...movieSelected} modalOpen={modalOpen}
      />
      }
    </div>
  )
}

export default Row



