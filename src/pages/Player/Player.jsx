import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {



  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJlNzk0ZTNkMDRlMjkwZGFmY2Q1NDIxNDFiYjBlMiIsIm5iZiI6MTcxOTU4MzYwNC43MzUyMSwic3ViIjoiNjY3YzJjMDRjMzE4NjI2ZTI0MTZjYWE4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.r7fHYxSyeH-hFBdZo3AlcLy_9blppLH6dteT_Fx_q4g'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])
  
  




  return (
    <div className='player h-screen flex flex-col justify-center items-center'>
        <img src={back_arrow_icon} className=' absolute top-5 left-5 w-12 cursor-pointer' alt="" onClick={()=>{navigate(-2)}}/>
        <iframe className=' rounded-xl' width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info flex items-center justify-between w-11/12">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player