import React from "react";
import ApiaryPage from "./components/apiaryPage/ApiaryPage";
import NavBar from "./components/navBar/NavBar";

const MainSection = ({ hives, setHives, apiaries, apiary, setApiary }) => {
  return (
    <div className="mainSection">
      <NavBar apiaries={apiaries} setApiary={setApiary} apiary={apiary}  />
      <ApiaryPage hives={hives} setHives={setHives} />
    </div>
  );
};

export default MainSection;
