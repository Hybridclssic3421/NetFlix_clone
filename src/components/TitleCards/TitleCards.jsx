import React, { useEffect, useRef, useState } from 'react'
import cards_data from '../../assets/cards/Cards_data'
import './TitleCards.css'
import { Link } from 'react-router-dom'


const TitleCards = ({title, catagory}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJlNzk0ZTNkMDRlMjkwZGFmY2Q1NDIxNDFiYjBlMiIsIm5iZiI6MTcxOTQxNDEzMy41NDk4MDcsInN1YiI6IjY2N2MyYzA0YzMxODYyNmUyNDE2Y2FhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6qu5G1Gx2_AKkBtYVp0niXr8YdDCXaPBRQHufoiirpA'
    }
  };
  
  

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}


useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${catagory?catagory:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index)=>{
            return <Link to={`./player/${card.id}`} className="card relative" key={index}>
              <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
              <p className='absolute'>{card.original_title}</p>
            </Link>
          })}
        </div>
    </div>
  )
}

export default TitleCards