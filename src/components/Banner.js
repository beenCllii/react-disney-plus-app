import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import request from '../api/request'
import "./Banner.css"
import styled from 'styled-components'

const Banner = () => {

  const [movie,setMovie] = useState([]);
  const [isClicked,setIsClicked] = useState(false);

  useEffect (()=>{
    fetchData();
  },[])

  const fetchData = async() => {

    // 현재 상영중인 영화 리스트
    const responses = await axios.get(request.fetchNowPlaying);
    // 가져온 리스트 중 랜덤으로 하나의 ID꺼내기
    const movieId = responses.data.results[Math.floor(Math.random() * responses.data.results.length)].id;
    // 특정 영화 정보 꺼내기(비디오 포함)
    const {data:movieDetail} = await axios.get(`movie/${movieId}`,{
      params : {append_to_response: "videos"}
    })
    setMovie(movieDetail);

  }
  //영화 소개글 n글자 이상일 경우 자르기
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0,n)+'...':str
  }


 
  if(isClicked){ // 비디오 Play 버튼 클릭시
    return(
      <>
      <Container>
        <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
          ></Iframe>
        </HomeContainer>
      </Container>
      <button onClick={()=>(setIsClicked(false))}>X</button>
      </>
    )
  }else{ // 기본 메인 화면
  return (
    <header
      className='banner'
      style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition:'top center',
        backgroundSize:'cover',
      }}>
        <div className='banner_contents'>
          <h1 className='banner_title'>{movie.title || movie.name || movie.original_name}</h1>
          <div className='banner_buttons'>
            { movie?.videos?.results[0]?.key && <button className='banner_button play' onClick={()=>setIsClicked(true)}>Play</button> }
          </div> 
          <p className='banner_description'>
            {truncate(movie?.overview,100)}
          </p>
        </div>
        <div className='banner-fadeBottom'></div>
    </header>
    
  )}
}

export default Banner

const Container = styled.div`
  display : flex;
  justify-content:center;
  align-items: center;
  flex-disrection : column;
  width:100%;
  height:100vh;
`;

const HomeContainer = styled.div`
  width:100%;
  height:100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height:100%;
  z-index:-1;
  opacity:0.65;
  border:none;

  &:after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    hegiht:100%;
  }
`;