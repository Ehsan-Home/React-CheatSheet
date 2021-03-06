import React from "react";
import LanguageContext from "../Contexts/LanguageContext";

// const Field = () => {
//     return (
//         <div className="ui field">
//             <label>Name</label>
//             <input />
//         </div>
//     )
// }

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <>
        <h1 className="ui header">this.context</h1>
        <div className="ui field">
          <label>{text}</label>
          <input />
        </div>
      </>
    );
  }
}

export default Field;
