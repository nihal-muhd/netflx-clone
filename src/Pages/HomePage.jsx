import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/Banner/Banner";
import RowPost from "../Components/RowPost/RowPost";
import { action, comedy, horror, orginals, romance } from "../constants/urls";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={orginals} title="Netflix Orginals" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
    </div>
  );
};

export default HomePage;
