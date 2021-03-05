import React, { useState } from "react";
import ColorContext from "../Contexts/ColorContext";
import LanguageContext from "../Contexts/LanguageContext";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");

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

      <ColorContext.Provider value={"black"}>
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
