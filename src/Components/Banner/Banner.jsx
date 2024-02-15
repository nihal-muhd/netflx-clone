import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../axios";
import { API_KEY, bannerUrl, imageUrl } from "../../constants/urls";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(bannerUrl).then((response) => {
      setMovie(response.data.results[1]);
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.original_title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">More info</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""} </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
