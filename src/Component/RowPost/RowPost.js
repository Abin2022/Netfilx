import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {imageUrl,API_KEY } from '../../constants/constants'
import "./RowPost.css"
import Youtube from 'react-youtube'

function RowPost(props) {
  const[movies,setMovie]= useState([])

  const [urlId,setUrlId] = useState([])
   
  useEffect(()=>{
    
   axios.get(props.url).then(response=>{
    console.log(response.data);
    setMovie(response.data.results)
   }).catch(err=>{
    // alert('Please Check your Internet')
   })
  },[props.url])


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
  console.log(id);
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
     if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
     }else{
      console.log("Array is Empty");
     }
  })
  }

  return (
    <div className='row'>
        <h2>
          {props.title} 
        </h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>{
              handleMovie(obj.id)
            }} className={props.isSmall?'smallPoster ' : "poster" } alt="poster" src={`${imageUrl+obj.backdrop_path }`}></img>

          ) } 
           
        </div>
      {urlId && <Youtube  opts={opts} videoId={urlId.key}/> } 
    </div>
  )
}

export default RowPost