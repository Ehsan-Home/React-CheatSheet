import React, { useState } from "react";
import ColorContext from "../Contexts/ColorContext";
import LanguageContext from "../Contexts/LanguageContext";
import nameContext from "../Contexts/NameContext";
import Name from "./Name";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");
  const [name ,setName] = useState("")

  const onLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <div className="ui container">
      <br />
      <br />

      <div>Select a langauge</div>
      <i className="flag us" onClick={() => onLanguageChange("english")} />
      <i className="flag nl" onClick={() => onLanguageChange("dutch")} />
      <br />
      <br />


      <br />

      <div>Click this button to send the context</div>
      <nameContext.Provider value={{name,setName}}>
      <button className="button ui green"
      onClick={() => setName("ehsan")}>Send</button>
      <Name />
      </nameContext.Provider>
      <br />

      <ColorContext.Provider value={"black"}>
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
