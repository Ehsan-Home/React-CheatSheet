import React from "react";
import LanguageContext from "../Contexts/LanguageContext";

// const Button = () => {
//     return (
//         <button className="ui button primary">Submit</button>
//     )
// }

class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
