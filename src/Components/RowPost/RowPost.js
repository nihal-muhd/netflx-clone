import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/urls'
import Youtube from 'react-youtube'

function RowPost(props) {

  const [movies, setMovies] = useState([])

  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        console.log(response.data.results);
        setUrlId(response.data.results[1])
      } else {
        console.log("No Trailer")
      }
    })

  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movies.map((obj) => {
            return (
              <div>
                <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="" />
                <p>{obj.name ? obj.name : obj.title}</p>
              </div>
            )
          })
        }

      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
