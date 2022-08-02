import MainSection from "components/mainSection/MainSection";
import React, { useEffect, useState } from "react";
import SideBar from "./components/sideBar/SideBar";

import "./style/style.scss";

function App() {
  const [apiary, setApiary] = useState('');
  const [hives, setHives] = useState([]);
  const [apiaries, setApiaries]= useState([]);

  async function fetchApiaries() {
    fetch("http://bnbee-lviv.loca.lt/apiaries",  {'Bypass-Tunnell-Reminder': true})
      .then((response) => response.json())
      .then((response) => setApiaries(response));
  }

  async function fetchHives() {
    fetch(`http://bnbee-lviv.loca.lt/statistic/latest/${apiary ? apiary : 1}`, {'Bypass-Tunnell-Reminder': true})
      .then((response) => response.json())
      .then((response) => setHives(response));
  }

  useEffect(() => {
    fetchApiaries();
    fetchHives()
  }, []);

  useEffect(() => {
    fetchHives();
  }, [apiary]);
  return (
    <div className="app">
      <SideBar  />
      <MainSection hives={hives} setHives={setHives} apiaries={apiaries} setApiary={setApiary} apiary={apiary} />
    </div>
  );
}

export default App;
