import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.scss"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import HomePage from "./Pages/HomePage";
// import { action, orginals, romance, horror, comedy } from './urls'

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Banner /> */}
      {/* <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/> */}
    </div>
  );
}

export default App;
