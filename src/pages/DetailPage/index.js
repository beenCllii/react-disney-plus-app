import axios from '../../api/axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DetailPage = () => {

  const {movieId} = useParams();
  const [movie,setMovie] = useState({});

  useEffect(() => {
    async function fetData() {
      const response = await axios.get(`movie/${movieId}`);
      setMovie(response.data);
      console.log(response.data);
    }

    fetData();
  },[movieId])

  if(!movie){
    return null;
  }else{
    return (
      <section>
        
        <img className='modal_poster-img' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='movie'/>
      </section>
    )
  }
}

export default DetailPage
