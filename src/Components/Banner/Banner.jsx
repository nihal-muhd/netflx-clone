import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../axios";
import { API_KEY, bannerUrl, imageUrl } from "../../constants/urls";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    let x = Math.round(Math.random() * 20);
    axios.get(bannerUrl).then((response) => {
      setMovie(response?.data?.results[x]);
    });
  }, []);
  return (
    <div className="banner-container">
      <div
        style={{
          backgroundImage: `url(${
            movie ? imageUrl + movie.backdrop_path : ""
          })`,
        }}
        className="banner"
      >
        <div className="content">
          <h1 className="title">
            {movie?.original_title
              ? movie?.original_title
              : movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">More info</button>
          </div>
          <h1 className="discription">{movie ? movie.overview : ""} </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
