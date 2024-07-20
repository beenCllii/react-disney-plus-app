import axios from '../../api/axios'
import React from 'react'
import { useState, useEffect } from'react'
import { useLocation, useNavigate } from'react-router-dom'
import './SearchPage.css'
import { useDebounce } from '../../hooks/useDebounce'

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  /**
   * 검색창에 값이 변경되면 해당 params 꺼내기
   * useLocation().search === ?p=searchValue...&page=123...
   * new URLSearchParams(useLocation().search) === p=searchValue, page=123...
   */
  const SearchQuery = () => {
    return new URLSearchParams(useLocation().search); 
  }
  let query = SearchQuery();
  const searchTerm = query.get('q');
  const debounceTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(debounceTerm != null){
      fetchSearchMovie(debounceTerm);
    }
  },[debounceTerm])

  const fetchSearchMovie = async() =>{
    try{
      const response = await axios.get(`/search/multi?include_adult=false&query=${debounceTerm}`);
      setSearchResult(response.data.results);
    }catch(error){
      console.log(error);
    }
  }

  if(searchResult.length > 0 ){ // 검색 데이터가 있음���
    return (
      <section className='search_container'>
        {searchResult.map((movie)=>{
          if(movie.backdrop_path !== null && movie.media_type !== 'person'){
            const movieImageUrl = `https://image.tmdb.org/t/p/w500`+ movie.backdrop_path;
            return(
              <div className='movie' key={movie.id}>
                <div className='movie_column_poster' onClick={()=>navigate(`/${movie.id}`)}>
                  <img src={movieImageUrl} alt='movie' className='movie_poster'/>
                  <div className='movie_name'>{movie.name}</div>
                </div>
              </div>
            )
          }
      })}
      </section>
    )
  }else{ // 검색 데이터가 없을���
    return (
      <section className='no_results'>
        <div className='no_results_text'>
          <p> 찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없음니다. </p>
        </div>
      </section>
    )
  }
  
}

export default SearchPage
